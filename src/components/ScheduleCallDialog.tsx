import { useState } from 'react';
import { Calendar, Clock, User, CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import emailjs from '@emailjs/browser';

interface ScheduleCallDialogProps {
    children: React.ReactNode;
}

const ScheduleCallDialog = ({ children }: ScheduleCallDialogProps) => {
    const [date, setDate] = useState<Date>();
    const [selectedTime, setSelectedTime] = useState<string>('');
    const [step, setStep] = useState<'date' | 'time' | 'details'>('date');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [open, setOpen] = useState(false);
    const { toast } = useToast();

    const [bookingDetails, setBookingDetails] = useState({
        name: '',
        email: '',
        callType: '',
        message: '',
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    });

    const timeSlots = [
        '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
        '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
        '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00'
    ];

    const handleDateSelect = (selectedDate: Date | undefined) => {
        setDate(selectedDate);
        if (selectedDate) setStep('time');
    };

    const handleTimeSelect = (time: string) => {
        setSelectedTime(time);
        setStep('details');
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setBookingDetails(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleCallTypeChange = (value: string) => {
        setBookingDetails(prev => ({
            ...prev,
            callType: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!date || !selectedTime) {
            toast({
                title: "Missing Date/Time",
                description: "Please select both date and time before submitting.",
                variant: "destructive"
            });
            return;
        }

        if (!bookingDetails.callType) {
            toast({
                title: "Missing Call Type",
                description: "Please select a call type.",
                variant: "destructive"
            });
            return;
        }

        setIsSubmitting(true);

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: bookingDetails.name,
                    email: bookingDetails.email,
                    datetime: `${format(date, 'EEEE, MMMM d, yyyy')} at ${selectedTime} (${bookingDetails.timezone})`,
                    callType: bookingDetails.callType,
                    message: bookingDetails.message
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            toast({
                title: "Call Request Sent Successfully! 🎉",
                description: `We’ve received your request for a call on ${format(date, 'EEEE, MMMM d, yyyy')} at ${selectedTime}. You’ll receive an official invite once it’s confirmed.`
            });            

            setDate(undefined);
            setSelectedTime('');
            setStep('date');
            setBookingDetails({
                name: '',
                email: '',
                callType: '',
                message: '',
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
            });
            setOpen(false);
        } catch (error) {
            console.error(error);
            toast({
                title: "Failed to Schedule Call",
                description: "Something went wrong while sending your request. Please try again.",
                variant: "destructive"
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetDialog = () => {
        setStep('date');
        setDate(undefined);
        setSelectedTime('');
    };

    const isWeekend = (date: Date) => {
        const day = date.getDay();
        return day === 0 || day === 6;
    };

    const isPastDate = (date: Date) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return date < today;
    };

    return (
        <Dialog open={open} onOpenChange={(newOpen) => {
            setOpen(newOpen);
            if (!newOpen) resetDialog();
        }}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="sm:max-w-[600px] glass border-0">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold gradient-text flex items-center">
                        <CalendarIcon className="mr-3 h-6 w-6" /> Schedule a Call
                    </DialogTitle>
                </DialogHeader>

                <div className="space-y-6 py-4">
                    {/* Progress Indicator */}
                    <div className="flex flex-wrap items-center space-x-4 mb-8">
                        {[
                            { stepName: 'date', icon: Calendar },
                            { stepName: 'time', icon: Clock },
                            { stepName: 'details', icon: User }
                        ].map(({ stepName, icon: StepIcon }) => {
                            const isActive = step === stepName;
                            const isCompleted = 
                                (stepName === 'date' && date) || 
                                (stepName === 'time' && selectedTime);
                            return (
                                <div
                                    key={stepName}
                                    className={cn(
                                        "flex items-center space-x-2 px-3 py-1 rounded-full transition-all",
                                        isActive
                                            ? 'bg-primary text-primary-foreground'
                                            : isCompleted
                                                ? 'bg-success text-success-foreground'
                                                : 'bg-muted text-muted-foreground'
                                    )}
                                    aria-current={isActive ? 'step' : undefined}
                                >
                                    <StepIcon className="h-4 w-4" />
                                    <span className="text-sm font-medium">{stepName.charAt(0).toUpperCase() + stepName.slice(1)}</span>
                                </div>
                            );
                        })}
                    </div>

                    {/* Step 1: Date Selection */}
                    {step === 'date' && (
                        <Card className="glass border-0 animate-fade-up">
                            <CardContent className="p-6">
                                <h3 className="text-lg font-semibold mb-4">Select a Date</h3>
                                <div className="flex justify-center">
                                    <CalendarComponent
                                        mode="single"
                                        selected={date}
                                        onSelect={handleDateSelect}
                                        disabled={(date) => isPastDate(date) || isWeekend(date)}
                                        className="p-3 pointer-events-auto"
                                    />
                                </div>
                                <p className="text-sm text-muted-foreground mt-4 text-center">
                                    Available Monday through Friday. Weekends are not available.
                                </p>
                            </CardContent>
                        </Card>
                    )}

                    {/* Step 2: Time Selection */}
                    {step === 'time' && (
                        <Card className="glass border-0 animate-fade-up">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-semibold">Select a Time</h3>
                                    <Button variant="outline" size="sm" onClick={() => setStep('date')} className="hover-glow">
                                        Change Date
                                    </Button>
                                </div>
                                <div className="mb-4">
                                    <Badge variant="secondary" className="mb-2">
                                        {date && format(date, 'EEEE, MMMM d, yyyy')}
                                    </Badge>
                                    <p className="text-sm text-muted-foreground">
                                        Times shown in your timezone: {bookingDetails.timezone}
                                    </p>
                                </div>
                                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                                    {timeSlots.map((time) => (
                                        <Button
                                            key={time}
                                            variant={selectedTime === time ? "default" : "outline"}
                                            className={cn(
                                                "h-12 hover-glow transition-all",
                                                selectedTime === time && "shadow-glow"
                                            )}
                                            onClick={() => handleTimeSelect(time)}
                                            aria-pressed={selectedTime === time}
                                        >
                                            {time}
                                        </Button>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    {/* Step 3: Contact Details */}
                    {step === 'details' && (
                        <Card className="glass border-0 animate-fade-up">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-lg font-semibold">Your Details</h3>
                                    <Button variant="outline" size="sm" onClick={() => setStep('time')} className="hover-glow">
                                        Change Time
                                    </Button>
                                </div>

                                {/* Booking Summary */}
                                <div className="bg-gradient-surface p-4 rounded-lg mb-6">
                                    <h4 className="font-semibold mb-2">Call Summary</h4>
                                    <div className="space-y-1 text-sm">
                                        <p><strong>Date:</strong> {date && format(date, 'EEEE, MMMM d, yyyy')}</p>
                                        <p><strong>Time:</strong> {selectedTime} ({bookingDetails.timezone})</p>
                                        <p><strong>Duration:</strong> 30 minutes</p>
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name *</label>
                                            <Input id="name" name="name" value={bookingDetails.name} onChange={handleInputChange} placeholder="Your full name" required className="glass border-0" />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address *</label>
                                            <Input id="email" name="email" type="email" value={bookingDetails.email} onChange={handleInputChange} placeholder="your.email@example.com" required className="glass border-0" />
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="callType" className="block text-sm font-medium mb-2">Call Type *</label>
                                        <Select value={bookingDetails.callType} onValueChange={handleCallTypeChange}>
                                            <SelectTrigger className="glass border-0" aria-label="Call type selection">
                                                <SelectValue placeholder="Select call type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Video Call">Video Call</SelectItem>
                                                <SelectItem value="Audio Call">Audio Call</SelectItem>
                                                <SelectItem value="In-Person">In-Person</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium mb-2">What would you like to discuss? *</label>
                                        <Textarea id="message" name="message" value={bookingDetails.message} onChange={handleInputChange} placeholder="Brief description of your project or what you'd like to discuss..." rows={4} required className="glass border-0 resize-none" />
                                    </div>

                                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full hover-glow">
                                        {isSubmitting ? "Scheduling Call..." : (
                                            <>
                                                <CalendarIcon className="mr-2 h-5 w-5" /> Schedule Call
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ScheduleCallDialog;