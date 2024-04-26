import clsx from 'clsx'

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-[#e14242]'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({ invert = false, officeData, ...props }) {
  return (
    <ul role="list" {...props}>
      {
        officeData && officeData.map((item) =>(
          <li>
        <Office name={item.name} invert={invert}>
         {item.address1}
          <br />
         {item.address2}
        </Office>
      </li>
        ))
      }
      
    </ul>
  )
}
