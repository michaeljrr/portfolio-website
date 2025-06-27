'use client';

import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image';


export default function Experience() {
  return (
    <section id="experience" className="py-16 px-4 bg-gray-50">
      <h2 className="text-2xl font-semibold mb-4 text-black text-center">
        My Experience
      </h2>

      <Timeline position={'right'}>
        <TimelineItem>
          <TimelineOppositeContent sx={{ my: 'auto' }} align="right" variant="body2" color="text.secondary">
            June 2025 - Present
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineConnector sx={{ 
              flexGrow: 1, 
              minHeight: '2rem', // Use rem instead of px for better scaling
              height: 'auto'
            }}/>
            <TimelineDot sx={{ 
              p: 0, 
              width: 70, 
              height: 70, 
              backgroundColor: 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Image 
                src="/sutd.png" 
                alt="SUTD" 
                width={66} // Slightly smaller to avoid scaling issues
                height={66} 
                className="rounded-full object-cover" 
                style={{ width: '66px', height: '66px' }} // Explicit sizing
              />
            </TimelineDot>
            <TimelineConnector sx={{ 
              flexGrow: 1, 
              minHeight: '2rem',
              height: 'auto'
            }}/>
          </TimelineSeparator>

          <TimelineContent sx={{ py: 2, px: 2 }}>
            <Typography sx={{ fontWeight: 'bold' }}>SUTD Part-Time Work Scheme</Typography>
            <Typography sx={{ fontSize: '15px', color: 'gray' }}>Software Developer</Typography>
            <Typography sx={{ mt: 1, maxWidth: '400px' }}>
              Designing and developing a web application that automates IRB draft generation for students and research professionals.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent sx={{ my: 'auto' }} align="right" variant="body2" color="text.secondary">
            Apr 2023 - Nov 2023
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineConnector sx={{ 
              flexGrow: 1, 
              minHeight: '2rem',
              height: 'auto'
            }}/>  
            <TimelineDot sx={{ 
              p: 0, 
              width: 70, 
              height: 70, 
              backgroundColor: 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Image 
                src="/soar.png" 
                alt="SCRT" 
                width={66} 
                height={66} 
                className="rounded-full object-cover" 
                style={{ width: '66px', height: '66px' }}
              />
            </TimelineDot>
            <TimelineConnector sx={{ 
              flexGrow: 1, 
              minHeight: '2rem',
              height: 'auto'
            }}/>
          </TimelineSeparator>

          <TimelineContent sx={{ py: 2, px: 2 }}>
            <Typography sx={{ fontWeight: 'bold' }}>SCRT (SUTD Competitive Robotics Team)</Typography>
            <Typography sx={{ fontSize: '15px', color: 'gray' }}>Software Team Lead</Typography>
            <Typography sx={{ mt: 1, maxWidth: '350px' }}>
              Created a custom C++ library incorporating PID control, odometry, and VEX libraries, enhancing the functionality and versatility of our club robots.
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </section>
  );
}