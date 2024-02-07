import { ReactComponent as LetterDown } from '../../images/scrollUp/drop-svgrepo-com.svg'
import { ScrollOnStyles } from './ScrollOnStyles.styled';

const scrollUp = () => {

  const scrollOn = () => {
    
  };

  return (
    <ScrollOnStyles $isDark={isDark}>

        <div onClick={scrollOn} style={windows ? {backgroundColor: 'lightgray', animationIterationCount: 0, visibility: 'hidden'}: selectorGallerySlice.messagesBuffer !== undefined && selectorGallerySlice.mesBuffLength === selectorGallerySlice.messagesBuffer.length ? {backgroundColor: 'lightgray', animationIterationCount: 0, visibility: 'visible'} : {backgroundColor: 'rgba(194, 212, 31, 0.801)'}}>
            <LetterDown style={{width:'35px', height:'35px'}}/>
        </div>

    </ScrollOnStyles >
  )
}

export default scrollUp

