/** Traditional paper-based QC vs QCX software — shown on QCX product detail. */
export const SYSTEM_COMPARISON = {
  existingLabel: 'The old way (paper-based)',
  oursLabel: 'QCX Software Advantage',
  rows: [
    {
      id: 'dataTransfer',
      dimension: 'Data Transfer',
      existing: 'Manual entry data',
      ours: 'Bluetooth /USB direct data transfer',
    },
    {
      id: 'inspectionResult',
      dimension: 'Inspection Result',
      existing: 'Manual Judge pass / fail',
      ours: 'Automated Certainly. System judge result against pre-set tolerances, removing human bias',
    },
    {
      id: 'ecn',
      dimension: 'ECN & Revision Control',
      existing: 'Avoid outdated paper drawings or SOP mistake',
      ours: 'Total compliances. Centralized digital control',
    },
    {
      id: 'storage',
      dimension: 'Storage of records',
      existing:
        'Manual filing, handling, management effort, traceability, version control, retrieval control. Handwritten readable and analysis typing interpretation',
      ours: 'Real time, traceability, cost and paperless saving. Analysis speed and accuracy',
    },
  ],
}
