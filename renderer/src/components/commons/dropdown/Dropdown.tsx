import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import * as Styled from '@/src/components/commons/dropdown/Dropdown.styles'
import useClickOutside from '@/src/commons/hooks/useClickOutside'

interface DropdownProps {
  optionList: string[] | number[]
  defaultValue?: string | number
  placeholder?: string
  onSelect: (option: string | number) => void
}

const Dropdown = ({ optionList, placeholder = '', onSelect }: DropdownProps) => {
  const [selectedOption, setSelectedOption] = useState<string | number | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [topPosition, setTopPosition] = useState('40px')
  const dropdownInputRef = useRef<HTMLDivElement | null>(null)
  const dropdownOptionListRef = useRef<HTMLDivElement | null>(null)
  const handleClickOutside = () => {
    setIsOpen(false)
  }
  useClickOutside(dropdownOptionListRef, handleClickOutside)

  useEffect(() => {
    if (!selectedOption) return
    onSelect(selectedOption)
  }, [selectedOption])

  useEffect(() => {
    if (!dropdownInputRef) return
    const inputHeight = dropdownInputRef.current?.getBoundingClientRect().height
    if (!inputHeight) return
    setTopPosition(() => `${inputHeight}px`)
  }, [dropdownInputRef])

  useLayoutEffect(() => {
    const inputY = dropdownInputRef.current?.getBoundingClientRect().y
    const inputHeight = dropdownInputRef.current?.getBoundingClientRect().height
    const optionListHeight = dropdownOptionListRef.current?.getBoundingClientRect().height

    if (!inputY) return
    if (!inputHeight) return
    if (!optionListHeight) return

    const totalHeight = inputY + inputHeight + optionListHeight
    const browserHeight = window.innerHeight

    if (totalHeight > browserHeight) {
      setTopPosition(() => `-${dropdownOptionListRef.current?.offsetHeight}px`)
    } else {
      setTopPosition(() => `${inputHeight}px`)
    }
  }, [isOpen])

  return (
    <Styled.Dropdown>
      <Styled.DropdownSelectInput ref={dropdownInputRef} onClick={() => setIsOpen(prev => !prev)}>
        {selectedOption && <span>{selectedOption}</span>}
        {!selectedOption && <Styled.Placeholder>{placeholder}</Styled.Placeholder>}
      </Styled.DropdownSelectInput>

      {isOpen && (
        <Styled.DropdownOptionList ref={dropdownOptionListRef} top={topPosition}>
          {optionList.map((option, index) => (
            <Styled.DropdownOption
              key={`dropdown-option-${index}`}
              onClick={() => {
                setSelectedOption(() => option)
                setIsOpen(false)
              }}
            >
              {option}
            </Styled.DropdownOption>
          ))}
        </Styled.DropdownOptionList>
      )}
    </Styled.Dropdown>
  )
}

export default Dropdown
