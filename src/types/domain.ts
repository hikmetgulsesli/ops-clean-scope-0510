export interface OpsRecord {
  id: string;
  entityName: string;
  type: string;
  status: string;
  lastUpdated: string;
  priority: string;
  description: string;
  assignedTo?: string;
  assignedRole?: string;
  createdAt?: string;
  clientOrg?: string;
  projectCategory?: string;
  region?: string;
  notes?: string;
}

export interface AppSettings {
  systemAlerts: boolean;
  dailyDigest: boolean;
  weeklyReport: boolean;
  darkTheme: boolean;
}

export type View =
  | 'dashboard'
  | 'insights'
  | 'settings'
  | 'record-details'
  | 'create-record'
  | 'no-records'
  | 'system-error'
  | 'profile';

export interface AppState {
  currentView: View;
  records: OpsRecord[];
  selectedRecordId: string | null;
  settings: AppSettings;
  searchQuery: string;
  filterStatus: string;
  mobileMenuOpen: boolean;
  profileOpen: boolean;
  error: string | null;
  loading: boolean;
}

export const DEFAULT_SETTINGS: AppSettings = {
  systemAlerts: true,
  dailyDigest: false,
  weeklyReport: true,
  darkTheme: true,
};

export const INITIAL_RECORDS: OpsRecord[] = [
  {
    id: 'OP-7829',
    entityName: 'Alpha Server Migration',
    type: 'Infrastructure',
    status: 'active',
    lastUpdated: '10 mins ago',
    priority: 'high',
    description: 'Server migration for Alpha cluster',
  },
  {
    id: 'OP-7828',
    entityName: 'Q3 Financial Data Sync',
    type: 'Data Pipeline',
    status: 'pending',
    lastUpdated: '2 hrs ago',
    priority: 'medium',
    description: 'Quarterly financial data synchronization',
  },
  {
    id: 'OP-7825',
    entityName: 'Security Patch Deployment',
    type: 'Maintenance',
    status: 'completed',
    lastUpdated: 'Yesterday',
    priority: 'high',
    description: 'Critical security patch deployment',
  },
  {
    id: 'OP-7822',
    entityName: 'User Authentication API Update',
    type: 'Development',
    status: 'failed',
    lastUpdated: 'Yesterday',
    priority: 'critical',
    description: 'Auth API update implementation',
  },
  {
    id: 'OP-7819',
    entityName: 'Legacy Database Cleanup',
    type: 'Infrastructure',
    status: 'active',
    lastUpdated: '2 days ago',
    priority: 'medium',
    description: 'Legacy database cleanup operation',
  },
];
