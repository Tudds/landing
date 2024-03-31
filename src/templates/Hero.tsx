import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://luoitrade.substack.com/">
            Substacks
          </Link>
        </li>
        <li>
          <Link href="/">Trade Now !</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Make trading is for\n'}
            <span className="text-primary-500">Simple</span>
          </>
        }
        description="Learn trading with CMT."
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <Button xl>Download Free CMT Book</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
