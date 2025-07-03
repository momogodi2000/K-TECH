import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ComputerMaintenance from './ComputerMaintenance';
import PhoneRepair from './PhoneRepair';
import VideoSurveillance from './VideoSurveillance';
import GraphicDesign from './GraphicDesign';

const ServiceDetail = () => {
  const { serviceId } = useParams();

  // Routing vers les composants spécialisés
  switch (serviceId) {
    case 'computer-maintenance':
      return <ComputerMaintenance />;
    case 'phone-repair':
      return <PhoneRepair />;
    case 'video-surveillance':
      return <VideoSurveillance />;
    case 'graphic-design':
      return <GraphicDesign />;
    default:
      return <Navigate to="/404" replace />;
  }
};

export default ServiceDetail;