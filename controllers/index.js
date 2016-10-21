import companies from './companies';

export default function(seq) {
  return {
    companies: companies(seq)
  }
}
