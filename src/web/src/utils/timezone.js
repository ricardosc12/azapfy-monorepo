export default function timezone(){
    return Intl.DateTimeFormat().resolvedOptions().timeZone
}