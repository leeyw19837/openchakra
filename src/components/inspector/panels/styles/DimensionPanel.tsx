import React, { memo } from 'react'
import { SimpleGrid, Select } from '@chakra-ui/core'
import FormControl from '../../controls/FormControl'
import usePropsSelector from '../../../../hooks/usePropsSelector'
import { useForm } from '../../../../hooks/useForm'
import TextControl from '../../controls/TextControl'

const DimensionPanel = () => {
  const { setValueFromEvent } = useForm()
  const overflow = usePropsSelector('overflow')

  return (
    <>
      <SimpleGrid columns={2} spacing={1}>
        <TextControl hasColumn label="Width" name="width" />
        <TextControl hasColumn label="Height" name="height" />
      </SimpleGrid>

      <SimpleGrid columns={2} spacing={1}>
        <TextControl hasColumn label="Min W" name="minWidth" />
        <TextControl hasColumn label="Min H" name="minHeight" />

        <TextControl hasColumn label="Min W" name="maxWidth" />
        <TextControl hasColumn label="Min H" name="maxHeight" />
      </SimpleGrid>

      <FormControl label="Overflow">
        <Select
          size="sm"
          value={overflow || ''}
          onChange={setValueFromEvent}
          name="overflow"
        >
          <option>visible</option>
          <option>hidden</option>
          <option>scroll</option>
        </Select>
      </FormControl>
    </>
  )
}

export default memo(DimensionPanel)
