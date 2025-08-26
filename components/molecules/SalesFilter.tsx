import React from 'react'
import Input from '../atoms/Input'
import Button from '../atoms/Button'

interface SalesFilterProps {
  threshold: number
  onThresholdChange: (threshold: number) => void
  onReset: () => void
}

const SalesFilter: React.FC<SalesFilterProps> = ({ 
  threshold, 
  onThresholdChange, 
  onReset 
}) => {
  return (
    <div className="flex items-end space-x-4">
      <div className="flex-1">
        <Input
          type="number"
          label="Sales Threshold"
          placeholder="Enter minimum sales value"
          value={threshold}
          onChange={(value) => onThresholdChange(Number(value) || 0)}
        />
      </div>
      <Button
        variant="secondary"
        size="md"
        onClick={onReset}
      >
        Reset Filter
      </Button>
    </div>
  )
}

export default SalesFilter
