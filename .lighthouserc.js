module.exports = {
  ci: {
    collect: {
      startServerCommand: 'pnpm start',
      numberOfRuns: 1,
      url: [
        'http://localhost:3000',
        'http://localhost:3000/experience',
        'http://localhost:3000/project',
        'http://localhost:3000/activity',
        'http://localhost:3000/preview',
      ],
      settings: {
        preset: 'desktop',
      },
    },
    upload: {
      target: 'filesystem',
      outputDir: './lhci_reports',
      reportFilenamePattern: '%%PATHNAME%%-%%DATETIME%%-report.%%EXTENSION%%',
    },
  },
};
