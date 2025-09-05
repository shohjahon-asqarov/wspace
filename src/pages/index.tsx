import React from 'react';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import AnyWhere from "@/components/sections/AnyWhere";
import AppItegration from "@/components/sections/AppItegration";
import Customization from "@/components/sections/Customization";
import DataSecurity from "@/components/sections/DataSecurity";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import Pricing from "@/components/sections/Pricing";
import ProjectManagement from "@/components/sections/ProjectManagement";
import Sponsors from "@/components/sections/Sponsors";
import Testimonials from "@/components/sections/Testimonials";
import Extension from "@/components/sections/Extension";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <Navbar />
    <main>
      {children}
    </main>
    <Footer />
  </>
);

const Home: React.FC = () => {
  return (
    <MainLayout>
      <Hero />
      <ProjectManagement />
      <Extension />
      <Customization />
      <Pricing />
      <AnyWhere />
      <DataSecurity />
      <Sponsors />
      <AppItegration />
      <Testimonials />
    </MainLayout>
  );
};

export default Home;