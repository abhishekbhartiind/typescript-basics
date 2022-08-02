const makeRasberrySmoothie = (
  rasberries: boolean,
  nutButter?: boolean
): {
  rasberries: boolean
  nutButter: boolean
} => {
  const newSmoothie = {
    rasberries,
    nutButter: false,
  }

  if (nutButter) newSmoothie.nutButter = nutButter
  return newSmoothie
}

makeRasberrySmoothie(true, false)
makeRasberrySmoothie(true)
makeRasberrySmoothie(true, true)
