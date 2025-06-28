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
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-4 bg-gray-50">
      <h2 className="text-2xl font-semibold mb-4 text-black text-center">
        My Experience
      </h2>

      <Timeline position="right">
        {/* === Timeline Item 1 === */}
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ my: 'auto' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            <motion.span
              style={{ display: 'inline-block' }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              June 2025 - Present
            </motion.span>
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineConnector sx={{ flexGrow: 1, minHeight: '2rem' }} />

            <TimelineDot
              sx={{
                p: 0,
                width: 70,
                height: 70,
                backgroundColor: 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <Image
                  src="/sutd.png"
                  alt="SUTD"
                  width={66}
                  height={66}
                  className="rounded-full object-cover"
                />
              </motion.div>
            </TimelineDot>

            <TimelineConnector sx={{ flexGrow: 1, minHeight: '2rem' }} />
          </TimelineSeparator>

          <TimelineContent sx={{ py: 2, px: 2 }}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Typography sx={{ fontWeight: 'bold' }}>
                SUTD Part-Time Work Scheme
              </Typography>
              <Typography sx={{ fontSize: '15px', color: 'gray' }}>
                Software Developer
              </Typography>
              <Typography sx={{ mt: 1, maxWidth: '400px' }}>
                Designing and developing a web application that automates IRB
                draft generation for students and research professionals.
              </Typography>
            </motion.div>
          </TimelineContent>
        </TimelineItem>

        {/* === Timeline Item 2 === */}
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ my: 'auto' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            <motion.span
              style={{ display: 'inline-block' }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              Apr 2023 - Nov 2023
            </motion.span>
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineConnector sx={{ flexGrow: 1, minHeight: '2rem' }} />

            <TimelineDot
              sx={{
                p: 0,
                width: 70,
                height: 70,
                backgroundColor: 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <Image
                  src="/soar.png"
                  alt="SCRT"
                  width={66}
                  height={66}
                  className="rounded-full object-cover"
                />
              </motion.div>
            </TimelineDot>

            <TimelineConnector sx={{ flexGrow: 1, minHeight: '2rem' }} />
          </TimelineSeparator>

          <TimelineContent sx={{ py: 2, px: 2 }}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Typography sx={{ fontWeight: 'bold' }}>
                SCRT (SUTD Competitive Robotics Team)
              </Typography>
              <Typography sx={{ fontSize: '15px', color: 'gray' }}>
                Software Team Lead
              </Typography>
              <Typography sx={{ mt: 1, maxWidth: '400px' }}>
                Created a custom C++ library incorporating PID control, odometry,
                and VEX libraries, enhancing the functionality and versatility of
                our club robots.
              </Typography>
            </motion.div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </section>
  );
}
