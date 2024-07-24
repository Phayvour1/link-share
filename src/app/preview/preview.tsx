import Link from "next/link"
import Image from "next/image"

export default function preview() {
  return (
    <div>
        <div>
            <div>
               <Link href=""><p>Back to Editor</p></Link>
               <Link href=""><p>Share Link</p></Link>
            </div>
        </div>
        <div>
            <div>
                <Image src="" alt="profile-pic" />
                <p>Ben Wright</p>
                <p>ben@example.com</p>

                <div>
                    <div>
                        <Image src="/arrow-right.svg" alt="right-arrow"/>
                        
                    </div>
                    <div>
                        <Image src="/arrow-right.svg" alt="right-arrow"/>
                    </div>
                    <div>
                        <Image src="/arrow-right.svg" alt="right-arrow"/>
                    </div>
                </div>

            </div>

        </div>
      
    </div>
  )
}
