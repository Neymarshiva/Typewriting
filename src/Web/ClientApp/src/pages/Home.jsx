import React, { Component } from 'react';
import AppLayout from "../ui/AppLayout";
import DashboardLayout from '../features/dashboard/DashboardLayout';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <DashboardLayout />
    );
  }
}
