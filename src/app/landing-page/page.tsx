import React from 'react';
import FirstSection from '@/components/sections/FirstSection';
import ModelsSection from '@/components/sections/ModelsSection';
import StoriesSection from '@/components/sections/StoriesSection';
import ReasonSection from '@/components/sections/ReasonSection';
import ContactSection from '@/components/sections/ContactSection';

export default function LandingPage() {
    return (
        <div className="main">
            <FirstSection />
            <ModelsSection />
            <StoriesSection />
            <ReasonSection />
            <ContactSection />
        </div>
    );
}
