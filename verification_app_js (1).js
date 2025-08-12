import React, { useState, useRef, useCallback } from 'react';
import { Upload, Play, Shield, CheckCircle, AlertCircle, XCircle, Camera, Globe, Clock, Smartphone, BarChart3, FileVideo, Zap, ArrowLeft } from 'lucide-react';

const VerificationApp = ({ onNavigateHome }) => {
  const [uploadedVideos, setUploadedVideos] = useState([]);
  const [verificationResult, setVerificationResult] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStep, setProcessingStep] = useState('');
  const fileInputRef = useRef(null);

  // Simulated video processing functions (in real app, these would call the Python backend)
  const simulateVideoProcessing = useCallback((videos) => {
    return new Promise((resolve) => {
      // Simulate processing steps
      const steps = [
        'Extracting audio fingerprints...',
        'Analyzing visual features...',
        'Verifying GPS coordinates...',
        'Checking timestamps...',
        'Analyzing metadata...',
        'Calculating correlation scores...',
        'Generating verification report...'
      ];

      let currentStep = 0;
      const interval = setInterval(() => {
        if (currentStep < steps.length) {
          setProcessingStep(steps[currentStep]);
          currentStep++;
        } else {
          clearInterval(interval);
          
          // Simulate verification results based on number of videos
          const confidence = Math.min(0.85 + (videos.length * 0.05), 0.99);
          let tier = 'Unverified';
          if (confidence >= 0.99) tier = 'Rendrd Gold';
          else if (confidence >= 0.95) tier = 'Rendrd Silver';
          else if (confidence >= 0.90) tier = 'Rendrd Bronze';

          const result = {
            confidence_level: confidence,
            verification_tier: tier,
            matching_sources: videos.length,
            audio_correlation: Math.min(confidence + 0.02, 0.99),
            visual_correlation: Math.min(confidence + 0.01, 0.99),
            temporal_correlation: Math.min(confidence + 0.03, 0.99),
            spatial_correlation: Math.min(confidence - 0.01, 0.99),
            metadata_correlation: Math.min(confidence - 0.03, 0.95),
            verification_id: Math.random().toString(36).substr(2, 12).toUpperCase(),
            processing_time: '2.3 seconds'
          };
          
          resolve(result);
        }
      }, 800);
    });
  }, []);

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    const newVideos = files.map((file, index) => ({
      id: `video_${Date.now()}_${index}`,
      name: file.name,
      size: file.size,
      