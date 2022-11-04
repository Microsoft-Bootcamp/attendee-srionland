function calculateDaysBetweenDates (begin, end) {
  const beginDate = new Date(begin)
  const endDate = new Date(end)
  const difference = endDate.getTime() - beginDate.getTime()
  const days = difference / (1000 * 60 * 60 * 24)
  return days
}

// find all images without alternate text and give them a red border
const imagesWithoutAltText = await page.$$eval('img:not([alt])', images => {
  images.forEach(image => {
    image.style.border = '4px solid red'
  })
  return images.length
}

// Express server on port 3000
const express = require('express')