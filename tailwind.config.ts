/**
 * Generali Design System - Tailwind CSS Configuration
 * Extracted from Figma: Hackathon - Generali Library
 *
 * Note: With Tailwind CSS v4, the primary configuration lives in
 * index.css via @theme blocks. This file provides a JS-based reference
 * and can be loaded with the @config directive if needed.
 */

import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      /* ---- Font families ---- */
      fontFamily: {
        sans: ["'Helvetica Neue'", 'Helvetica', 'Arial', 'sans-serif'],
      },

      /* ---- Colors ---- */
      colors: {
        primary: {
          'red-1': '#c21817',
          'red-2': '#752126',
          'red-3': '#8e1230',
          'red-4': '#e9573d',
          gray: '#6f7072',
        },
        secondary: {
          'red-2': '#b15c49',
          'red-3': '#b65a65',
          'red-4': '#f09273',
          gray: '#b0b2b3',
          coral: '#f09273', // alias – Figma name: Secondary/Red 4
        },
        neutral: {
          black: '#000000',
          white: '#ffffff',
          'gray-1': '#404040',
          'gray-2': '#707070',
          'gray-3': '#dedede',
          'gray-4': '#f0f0f0',
          'gray-5': '#f9fafb',
        },
        link: {
          blue: '#346eff',
        },
      },

      /* ---- Font sizes ---- */
      fontSize: {
        'tag': ['8px', { lineHeight: '1', letterSpacing: '0.2px' }],
        'tag-xs': ['9px', { lineHeight: '1', letterSpacing: '0.2px' }],
        'caption': ['9px', { lineHeight: '1', letterSpacing: '0.2px' }],
        'caption-xs': ['12px', { lineHeight: '1', letterSpacing: '0.2px' }],
        'caption-xs-caps': ['12px', { lineHeight: '1', letterSpacing: '0.2px', fontWeight: '500' }],
        'subtitle': ['10px', { lineHeight: '1', letterSpacing: '0.4px' }],
        'body': ['12px', { lineHeight: '1', letterSpacing: '0.3px' }],
        'body-xs': ['16px', { lineHeight: '1.3', letterSpacing: '0' }],
        'button-m': ['12px', { lineHeight: '1', letterSpacing: '0.5px' }],
        'button-xs': ['14px', { lineHeight: '1', letterSpacing: '0.5px' }],
        'button-link': ['14px', { lineHeight: '1', letterSpacing: '0.5px' }],
        'button-link-s': ['12px', { lineHeight: '1', letterSpacing: '0.5px' }],
        'h5-subtitle-xs': ['14px', { lineHeight: '1', letterSpacing: '0.4px', fontWeight: '500' }],
        'h4': ['16px', { lineHeight: '24px', letterSpacing: '0.2px' }],
        'h4-xs': ['14px', { lineHeight: '1', letterSpacing: '0.5px' }],
        'h3-xs': ['18px', { lineHeight: '1', letterSpacing: '0.5px' }],
        'h3': ['20px', { lineHeight: '1', letterSpacing: '0.5px' }],
        'h2-xs': ['28px', { lineHeight: '1', letterSpacing: '0.875px' }],
        'h2': ['28px', { lineHeight: '1', letterSpacing: '0.875px' }],
        'h1': ['44px', { lineHeight: '1', letterSpacing: '1.375px' }],
        'callout': ['56px', { lineHeight: '1', letterSpacing: '1.3125px' }],
      },

      /* ---- Font weights ---- */
      fontWeight: {
        regular: '400',
        medium: '500',
        bold: '700',
      },

      /* ---- Letter spacing ---- */
      letterSpacing: {
        tight: '0.2px',
        body: '0.3px',
        subtitle: '0.4px',
        button: '0.5px',
        h2: '0.875px',
        callout: '1.3125px',
        h1: '1.375px',
      },

      /* ---- Spacing ---- */
      spacing: {
        '1': '4px',
        '1.5': '6px',
        '2': '8px',
        '2.25': '9px',
        '3': '12px',
        '3.5': '14px',
        '3.75': '15px',
        '4': '16px',
        '5.5': '22px',
        '6': '24px',
      },

      /* ---- Border radius ---- */
      borderRadius: {
        xs: '2px',
        sm: '4px',
        md: '5px',
      },

      /* ---- Box shadows ---- */
      boxShadow: {
        card: '0 2px 6px 6px rgba(0, 0, 0, 0.02)',
      },
    },
  },
  plugins: [],
} satisfies Config
