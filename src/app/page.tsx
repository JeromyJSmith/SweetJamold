'use client';

import * as React from "react";
import { useState } from 'react';
import type { FC } from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Music, Heart, Video, Users, ArrowRight } from 'lucide-react';

const BenefitConcertSite: FC = () => {
  const [currentPage, setCurrentPage] = useState('about');

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      {/* Banner Image */}
      <div className="w-full mb-6 rounded-lg overflow-hidden shadow-lg">
        <Image 
          src="/images/SweetJam-Poster.png"
          alt="Sweet Jam - A Benefit for Asheville"
          width={1200}
          height={300}
          className="w-full object-cover"
          priority
        />
      </div>

      {/* Navigation Buttons */}
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Conditional Content Rendering */}
      {currentPage === 'about' && <AboutContent setCurrentPage={setCurrentPage} />}
      {currentPage === 'proposal' && <ProposalContent />}
      {currentPage === 'sponsorship' && <SponsorshipContent />}
      
      {/* Contact Information */}
      <div className="text-center mt-8 bg-gray-100 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-purple-800 mb-2">Contact Us</h3>
        <a 
          href="mailto:JamcamAnnemarie@gmail.com" 
          className="font-bold text-blue-600 hover:text-blue-800 block"
        >
          Email: JamcamAnnemarie@gmail.com
        </a>
        <p className="font-bold">Phone: 303.330.8814</p>
      </div>
    </div>
  );
};

// Navigation Component
const Navigation = ({ currentPage, setCurrentPage }: { currentPage: string, setCurrentPage: React.Dispatch<React.SetStateAction<string>> }) => (
  <div className="flex justify-center gap-4 mb-6">
    <Button 
      variant={currentPage === 'about' ? 'default' : 'outline'}
      className={`font-semibold ${
        currentPage === 'about' 
          ? 'bg-purple-800 hover:bg-purple-700 text-white' 
          : 'border-purple-800 text-purple-800 hover:bg-purple-100'
      }`}
      onClick={() => setCurrentPage('about')}
    >
      About Sweet Jam
    </Button>
    <Button 
      variant={currentPage === 'proposal' ? 'default' : 'outline'}
      className={`font-semibold ${
        currentPage === 'proposal' 
          ? 'bg-green-800 hover:bg-green-700 text-white' 
          : 'border-green-800 text-green-800 hover:bg-green-100'
      }`}
      onClick={() => setCurrentPage('proposal')}
    >
      Space Station Proposal
    </Button>
    <Button 
      variant={currentPage === 'sponsorship' ? 'default' : 'outline'}
      className={`font-semibold ${
        currentPage === 'sponsorship' 
          ? 'bg-blue-800 hover:bg-blue-700 text-white' 
          : 'border-blue-800 text-blue-800 hover:bg-blue-100'
      }`}
      onClick={() => setCurrentPage('sponsorship')}
    >
      Sponsorship Tiers
    </Button>
  </div>
);

// Full About Content
const AboutContent = ({ setCurrentPage }: { setCurrentPage: React.Dispatch<React.SetStateAction<string>> }) => (
  <Card>
    <CardHeader className="bg-gradient-to-r from-purple-800 to-blue-800 text-white mb-8">
      <h1 className="text-3xl font-bold mb-8">Sweet Jam: A Benefit Concert</h1>
      <h2 className="text-xl">Supporting Asheville's Recovery</h2>
    </CardHeader>
    <CardContent className="p-6 space-y-8">
      <section className="prose max-w-none">
        <p className="text-lg leading-relaxed mt-8 mb-8">
          Join us for a special evening at the Boulder Theater as we unite to support Asheville, 
          North Carolina, in the wake of Hurricane Helena. This benefit concert, organized by 
          JamCam Productions in association with Sweet Relief, WaterStep, and the Boulder Film 
          Commission, will raise funds to support Asheville's residents in their recovery journey.
        </p>
      </section>

      <div className="bg-purple-50 p-6 rounded-lg border-2 border-gray-300 mb-8">
        <h3 className="text-xl font-bold text-purple-800 mb-4">Event Overview</h3>
        <p className="mb-4">
          Hurricane Helena left Asheville facing critical challenges, with limited access to water, 
          disrupted transportation, and extensive damage to vital community infrastructure. This 
          concert aims to bring much-needed relief and hope to Asheville through the healing power 
          of music.
        </p>
        <div className="flex flex-col space-y-2 mt-4">
          <div className="flex items-start gap-2">
            <Music className="w-5 h-5 text-purple-800 flex-shrink-0 mt-1" />
            <div>
              <strong>Date</strong>
              <p>TBA early 2025</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Users className="w-5 h-5 text-purple-800 flex-shrink-0 mt-1" />
            <div>
              <strong>Location</strong>
              <p>Boulder Theater, CO</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Video className="w-5 h-5 text-purple-800 flex-shrink-0 mt-1" />
            <div>
              <strong>Format</strong>
              <p>Live + International Live Music Streaming Broadcast (TBA)</p>
            </div>
          </div>
        </div>
      </div>

      <section className="border-2 border-gray-300 rounded-lg p-4 mb-8">
        <h3 className="text-xl font-bold text-purple-800 mb-4">Our Partners</h3>
        <div className="space-y-4">
          <div className="bg-purple-50 p-6 rounded-lg shadow-sm border">
            <div className="flex items-start gap-3">
              <Video className="w-6 h-6 text-purple-800 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-2xl font-bold mb-1">🎥 JamCam Productions</h4>
                <p className="text-gray-600 mb-4">
                  With over 30 years of music industry experience, JamCam Productions has captured exclusive artist interviews and live performances across various genres, with a special focus on the jam band scene. Having a longstanding history at the Boulder Theater since 1992, JamCam is proud to bring its expertise to this important cause.
                </p>
                <a 
                  href="https://jamcamtv.blog" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800 mt-2 inline-block"
                >
                  JamCamTV.Blog
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg shadow-sm border">
            <div className="flex items-start gap-3">
              <Heart className="w-6 h-6 text-blue-800 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-2xl font-bold mb-1">❤️ Sweet Relief</h4>
                <h5 className="font-semibold text-purple-800 mb-2">Musician Relief Fund</h5>
                <p className="text-gray-600">
                  Sweet Relief Musicians Fund provides financial assistance to all types of career musicians and music industry workers who are struggling to make ends meet while facing physical or mental health issues, disability, or age-related problems. Sweet Relief is a charitable organization dedicated to supporting individuals in the music industry who are often hardest hit by crises.
                </p>
                <a 
                  href="https://www.sweetrelief.org" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800 mt-2 inline-block"
                >
                  sweetrelief.org
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg shadow-sm border">
            <div className="flex items-start gap-3">
              <Users className="w-6 h-6 text-purple-800 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-2xl font-bold mb-1">💧 WaterStep</h4>
                <h5 className="font-semibold text-purple-800 mb-2">Disaster Relief</h5>
                <p className="text-gray-600">
                  Committed to disaster response management, WaterStep focuses on preparedness, response, and recovery. They help communities prepare for the worst, respond to immediate needs when natural disasters occur, and assist in recovery when the initial disaster response is over. Recently, WaterStep responded to Asheville's request for safe water containers by sending hundreds of jerry cans, preventing the use of unsafe containers and meeting residents' urgent needs free of charge. When you donate to WaterStep, you empower them to respond dynamically to each community's unique needs, offering both immediate and sustainable solutions.
                </p>
                <a 
                  href="https://waterstep.org" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800 mt-2 inline-block"
                >
                  WaterStep.org
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg shadow-sm border">
            <div className="flex items-start gap-3">
              <Video className="w-6 h-6 text-blue-800 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-2xl font-bold mb-1">🎬 Boulder County Film Commission</h4>
                <h5 className="font-semibold text-purple-800 mb-2">Arts and Culture Advocate</h5>
                <p className="text-gray-600">
                  Boulder County Film Commission supports and celebrates the local creative community, promoting film projects and industry networking. Their respected network and commitment to the arts make them an invaluable partner in amplifying awareness and encouraging contributions to this cause. Through initiatives like community events and a growing directory of local services, BCFC ensures Boulder remains a welcoming and resourceful hub for filmmakers and creative talent alike.
                </p>
                <a 
                  href="https://bouldercountyfilmcommission.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800 mt-2 inline-block"
                >
                  bouldercountyfilmcommission.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg border-2 border-gray-300 mb-8">
        <h3 className="text-xl font-bold text-blue-800 mb-4">Concert Highlights</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Music className="w-5 h-5 text-blue-800 flex-shrink-0 mt-1" />
            <p>Live Performances by renowned musicians from the jam band world, featuring an all-star 
            "power jam" finale celebrating resilience.</p>
          </div>
          <div className="flex items-start gap-3">
            <Users className="w-5 h-5 text-blue-800 flex-shrink-0 mt-1" />
            <p>Backstage Interviews with artists sharing how music bridges communities and fosters healing.</p>
          </div>
          <div className="flex items-start gap-3">
            <Video className="w-5 h-5 text-blue-800 flex-shrink-0 mt-1" />
            <p>Live Webcast reaching a global audience to maximize impact and donations.</p>
          </div>
        </div>
      </section>

      <section className="bg-purple-50 p-6 rounded-lg border-2 border-gray-300 mb-8">
        <h3 className="text-xl font-bold text-purple-800 mb-4">Why Music?</h3>
        <p className="text-gray-600 mb-4">
          In natural disasters, musicians are often deeply affected as their livelihoods depend on 
          instruments, venues, and performance spaces that may be lost. This benefit concert aims to 
          provide both immediate and long-term support for Asheville's music community, including 
          artists who have lost the tools of their trade.
        </p>
        <p className="text-gray-600">
          Our goal is to restore Asheville's vibrant music scene and reinforce the role of music 
          as a source of healing and connection. Join us in celebrating the strength of music to 
          heal and inspire resilience.
        </p>
      </section>

      <div className="bg-gray-100 p-6 rounded-lg text-center border-2 border-gray-300 mb-8">
        <h3 className="text-xl font-bold text-purple-800 mb-4">Contact Information</h3>
        <div className="space-y-2">
          <a 
            href="mailto:JamcamAnnemarie@gmail.com" 
            className="font-bold text-blue-600 hover:text-blue-800 block"
          >
            Email: JamcamAnnemarie@gmail.com
          </a>
          <p className="font-bold">Phone: 303.330.8814</p>
          <a 
            href="https://sweetjambenefit.org" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-bold text-blue-600 hover:text-blue-800 block"
          >
            Website: sweetjambenefit.org
          </a>
        </div>
        <div className="mt-6 flex justify-center gap-4">
          <Button 
            className="bg-purple-800 hover:bg-purple-700"
            onClick={() => setCurrentPage('sponsorship')}
          >
            <span className="text-amber-300 font-bold">View Sponsorship Tiers</span>
          </Button>
          <Button 
            variant="outline" 
            className="border-purple-800 text-purple-800 hover:bg-purple-100"
            onClick={() => setCurrentPage('learnMore')}
          >
            Learn More
          </Button>
        </div>
      </div>
    </CardContent>
  </Card>
);

const ProposalContent = () => (
<Card>
  <CardHeader className="bg-gradient-to-r from-green-800 to-blue-800 text-white">
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold">Sponsorship Proposal</h1>
        <h2 className="text-xl">Space Station Dispensary</h2>
      </div>
      <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center">
        <Users className="w-12 h-12 text-green-800" />
      </div>
    </div>
  </CardHeader>
  <CardContent className="p-6 space-y-6">
    <section>
      <h3 className="text-xl font-bold text-green-800 mb-4">Why Space Station Dispensary?</h3>
      <p className="text-gray-600">
        We are reaching out to you, **Space Station Dispensary**, to invite you to become one of our sponsors for **Sweet Jam: A Benefit for Asheville and Surrounding Areas**.

        Space Station Dispensary has a proud commitment to community, and with *Sweet Jam: A Benefit Concert for Asheville*, we offer an impactful way to showcase it. Hurricane Helena left Asheville's iconic music venues and gathering spaces in ruins, stripping the community of places to come together. By joining us as a sponsor, Space Station Dispensary can play a pivotal role in restoring these venues, fostering cultural resilience, and providing Asheville with the support it urgently needs to recover.

        Additionally, we have partnered with **WaterStep**, a global organization active in 72 countries, which provides safe water to communities in need. WaterStep has established stations in Asheville and surrounding areas to offer clean water options, including drinking and washing stations, ensuring safe, portable water solutions for those affected. Based on current information, we understand that people in the affected area will still be in great need of water assistance when the benefit happens in early 2025.

        Your sponsorship would enable us to make a real, lasting impact for those in crisis.
      </p>
    </section>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-green-50 p-6 rounded-lg">
        <h4 className="font-bold text-green-800 mb-2">Partnership Benefits</h4>
        <ul className="space-y-2">
          <li>Premium brand visibility</li>
          <li>VIP event access</li>
          <li>Community goodwill</li>
          <li>Marketing opportunities</li>
        </ul>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg">
        <h4 className="font-bold text-blue-800 mb-2">Impact Opportunities</h4>
        <ul className="space-y-2">
          <li>Support water access initiatives</li>
          <li>Help rebuild music venues</li>
          <li>Aid local artists</li>
          <li>Foster community resilience</li>
        </ul>
      </div>
    </div>

    <section className="bg-green-50 p-6 rounded-lg mb-6 border-2 border-gray-300">
      <h3 className="text-xl font-bold text-green-800 mb-4">About the Event: A Night of Hope and Healing</h3>
      <p className="text-gray-600 mb-4">
        Sweet Jam: A Benefit Concert for Asheville will bring together music lovers, artists, and key 
        supporters in an unforgettable evening of live music and unity, raising crucial funds for 
        Asheville's recovery. With your support, we aim to restore the very spaces where Asheville's 
        rich musical culture thrives and where community members find solace, creativity, and connection.
      </p>
      <p className="text-gray-600">
        Additionally, we have partnered with WaterStep, a global organization active in 72 countries, 
        which provides safe water to communities in need. WaterStep has established stations in Asheville 
        and surrounding areas to offer clean water options, including drinking and washing stations, 
        ensuring safe, portable water solutions for those affected.
      </p>
    </section>

    <section className="bg-blue-50 p-6 rounded-lg mb-6 border-2 border-gray-300">
      <h3 className="text-xl font-bold text-blue-800 mb-4">Why Sponsor Sweet Jam?</h3>
      <ul className="space-y-2 text-gray-600">
        <li className="flex items-start gap-2">
          <ArrowRight className="w-4 h-4 text-blue-800 flex-shrink-0 mt-1" />
          <span>Amplified Audience Reach: With both an in-person and global online audience</span>
        </li>
        <li className="flex items-start gap-2">
          <ArrowRight className="w-4 h-4 text-blue-800 flex-shrink-0 mt-1" />
          <span>Collaboration with Esteemed Partners: Align with respected organizations</span>
        </li>
        <li className="flex items-start gap-2">
          <ArrowRight className="w-4 h-4 text-blue-800 flex-shrink-0 mt-1" />
          <span>Community-Driven Brand Engagement: Be seen as a compassionate community leader</span>
        </li>
      </ul>
    </section>

    <section className="bg-green-50 p-6 rounded-lg border-2 border-gray-300">
      <h3 className="text-xl font-bold text-green-800 mb-4">Take Action and Join Us</h3>
      <p className="text-gray-600 mb-4">
        Space Station Dispensary's involvement will make a lasting impact, offering hope and tangible 
        support to Asheville's creative community. Your sponsorship would enable us to make a real, 
        lasting impact for those in crisis.
      </p>
      <p className="text-gray-600">
        With both an in-person and global online audience, Space Station Dispensary will enjoy 
        significant brand visibility. Our promotional partnerships and streaming platform will extend 
        your impact well beyond the Boulder Theater.
      </p>
    </section>

    <section className="bg-blue-50 p-6 rounded-lg border-2 border-gray-300">
      <h3 className="text-xl font-bold text-blue-800 mb-4">Event Details</h3>
      <ul className="space-y-2 text-gray-600">
        <li className="flex items-start gap-2">
          <ArrowRight className="w-4 h-4 text-blue-800 flex-shrink-0 mt-1" />
          <span>Date: Early 2025 (TBA)</span>
        </li>
        <li className="flex items-start gap-2">
          <ArrowRight className="w-4 h-4 text-blue-800 flex-shrink-0 mt-1" />
          <span>Location: Boulder Theater, Boulder, Colorado</span>
        </li>
        <li className="flex items-start gap-2">
          <ArrowRight className="w-4 h-4 text-blue-800 flex-shrink-0 mt-1" />
          <span>Global Streaming Partner: TBA</span>
        </li>
        <li className="flex items-start gap-2">
          <ArrowRight className="w-4 h-4 text-blue-800 flex-shrink-0 mt-1" />
          <span>Audience: Local attendees at Boulder Theater and a global online audience</span>
        </li>
      </ul>
    </section>
  </CardContent>
</Card>
);

const SponsorshipContent = () => (
<Card>
  <CardHeader className="bg-gradient-to-r from-purple-800 to-blue-800 text-white">
    <h1 className="text-3xl font-bold">Sponsorship Opportunities</h1>
    <h2 className="text-xl">Make a Lasting Impact</h2>
  </CardHeader>
  <CardContent className="p-6 space-y-6">
    {[
      {
        tier: "Maestro",
        price: 20000,
        seats: "8 VIP seats",
        location: "Private Box",
        benefits: [
          "Exclusive naming rights for VIP balcony",
          "Premium brand placement",
          "Private artist meet-and-greet",
          "Custom experience creation"
        ]
      },
      {
        tier: "Virtuoso",
        price: 15000,
        seats: "6 VIP seats",
        location: "Premium Balcony",
        benefits: [
          "Featured brand placement",
          "VIP reception hosting",
          "Exclusive backstage access",
          "Recognition in broadcast"
        ]
      },
      {
        tier: "Prodigy",
        price: 10000,
        seats: "4 VIP seats",
        location: "Premium Balcony",
        benefits: [
          "Priority balcony seating",
          "Prominent brand visibility",
          "VIP area access",
          "Event program feature"
        ]
      },
      {
        tier: "Luminary",
        price: 7500,
        seats: "8 VIP seats",
        location: "Rows 11-15",
        benefits: [
          "Recognition during event",
          "Logo on event posters",
          "Preferred seating",
          "VIP area access"
        ]
      },
      {
        tier: "Patron",
        price: 2500,
        seats: "4 VIP seats",
        location: "Rows 16-20",
        benefits: [
          "Name listed in event program",
          "Reserved seating",
          "VIP area access"
        ]
      }
    ].map((tier, index) => (
      <div key={index} className="border rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-purple-700 to-blue-700 text-white p-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold">{tier.tier}</h3>
            <div className="text-2xl font-bold">${tier.price.toLocaleString()}</div>
          </div>
        </div>
        <div className="p-4">
          <div className="mb-4">
            <p className="font-semibold">{tier.seats}</p>
            <p className="text-gray-600">{tier.location}</p>
          </div>
          <ul className="space-y-2">
            {tier.benefits.map((benefit, i) => (
              <li key={i} className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-purple-800" />
                <span className="text-gray-600">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </CardContent>
  <div className="mt-8 bg-purple-50 p-6 rounded-lg border-2 border-gray-300">
    <h3 className="text-xl font-bold text-purple-800 mb-4">Other Ways You Can Help the Cause</h3>
    <p className="text-gray-600 leading-relaxed">
      In addition to sponsorship, we invite contributions of items for our benefit auction. 
      Auctioned items, whether unique or highly valued, will drive donations and boost engagement. 
      This is an excellent opportunity for sponsors to showcase products or services, furthering 
      their brand's reach and commitment to community causes.
    </p>
  </div>
</Card>
);

export default function Home() {
return <BenefitConcertSite />;
} 