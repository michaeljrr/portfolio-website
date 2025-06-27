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
    <Timeline className='mt-12'>
        <TimelineItem>

            <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
            >
            June 2025 - Present
            </TimelineOppositeContent>

            <TimelineSeparator>

                <TimelineConnector sx={{ height: 20 }} />

                <TimelineDot sx={{ p: 0, width: 70, height: 70, backgroundColor: 'transparent',}}>
                    <Image
                        src="/sutd.png"
                        alt="My Logo"
                        width={500}
                        height={500}
                        className="w-full h-full rounded-full object-cover scale-95"
                    />
                </TimelineDot>

                <TimelineConnector sx={{ height: 15 }}/>
            </TimelineSeparator>

            <TimelineContent sx={{ py: '50px', px: 2  }}>
                <Typography sx={{ fontWeight: 'bold' }}>
                    SUTD Part-Time Work Scheme
                </Typography>
                <Typography sx={{ fontSize:'15px', color:'gray' }}>
                    Software Developer
                </Typography>
                <Typography sx={{ marginRight: '280px', marginTop: '10px' }}>
                    Designing and developing a web application that automates IRB draft generation for students and research professionals </Typography>
            </TimelineContent>

        </TimelineItem>

        <TimelineItem>

            <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
            >
            Apr 2023 - Nov 2023
            </TimelineOppositeContent>

            <TimelineSeparator>

                <TimelineConnector sx={{ height: 20 }} />

                <TimelineDot sx={{ p: 0, width: 70, height: 70, backgroundColor: 'transparent',}}>
                    <Image
                        src="/soar.png"
                        alt="My Logo"
                        width={500}
                        height={500}
                        className="w-full h-full rounded-full object-cover scale-95 "
                    />
                </TimelineDot>

                <TimelineConnector sx={{ height: 30 }}/>
            </TimelineSeparator>

            <TimelineContent sx={{ py: '50px', px: 2 }}>
                <Typography sx={{ fontWeight: 'bold' }}>
                    SCRT (SUTD Competitive Robotics Team)
                </Typography>
                <Typography sx={{ fontSize:'15px', color:'gray' }}>
                    Software Team Lead
                </Typography>
                <Typography sx={{ marginRight: '280px', marginTop: '10px' }}>
                    Created a custom C++ library incorporating PID control, odometry, and VEX libraries, enhancing the functionality 
                    and versatility of our club robots</Typography>
            </TimelineContent>

        </TimelineItem>
      
    </Timeline>

    </section>
  );
}
