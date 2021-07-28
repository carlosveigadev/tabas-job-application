require 'date'
def clean_date(array)
  new_array = []
  
  array.each do |date|
    new_array << Date.parse(date).to_s
  end
  new_array.sort
end


def clean_date_with_checking(array)
  new_array = []

  array.each do |date|
    new_array << Date.strptime(date, '%d %b %Y').to_s if is_valid_date?(date) == 'SIZE 3'
    new_array << Date.strptime(date, '%d %b').to_s if is_valid_date?(date) == 'SIZE 2'
  end

  new_array.sort
end

def is_valid_date?(string)
  splitted_string = string.split
  array_of_abbr = Date::ABBR_MONTHNAMES

  return 'SIZE 2' if splitted_string.size == 2 && array_of_abbr.include?(splitted_string[1])
  return 'SIZE 3' if splitted_string.size == 3 && array_of_abbr.include?(splitted_string[1])
end

p clean_date(['11 Aug 2020', '29 Jan', '27 Jan', '1 Dec 2022', '28 Jan'])

p clean_date_with_checking(['11 Aug 2020', '29 Jan', '27 Jan', '1 Dec 2022', '28 Jan', 'not a date'])
