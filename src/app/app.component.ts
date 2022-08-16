import { Component  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  }

    // const handleKeyDown = useCallback(
    //     e => {
    //         if (e.code === 'Escape') {
    //             onClose()
    //         }
    //     },
    //     [onClose],
    // )

    // useEffect(() => {
    //     window.addEventListener("keydown", handleKeyDown)
    //     return () => {
    //         window.removeEventListener('keydown', handleKeyDown)
    //     }
    // }, [handleKeyDown])

    // const handleBackDropClick = (e) => {
    //     if (e.currentTarget === e.target) {
    //         onClose();
    //     }
    // };
