require 'date'
def clean_date(array)
  new_array = []

  array.each do |date|
    new_array << Date.parse(date).to_s
  end
  values_within_range(new_array)
end


def clean_date_with_checking(array)
  new_array = []

  array.each do |date|
    new_array << Date.strptime(date, '%d %b %Y').to_s if is_valid_date?(date) == 'SIZE 3'
    new_array << Date.strptime(date, '%d %b').to_s if is_valid_date?(date) == 'SIZE 2'
  end

  values_within_range(new_array)
end

def is_valid_date?(string)
  splitted_string = string.split
  array_of_abbr = Date::ABBR_MONTHNAMES

  return 'SIZE 2' if splitted_string.size == 2 && array_of_abbr.include?(splitted_string[1])
  return 'SIZE 3' if splitted_string.size == 3 && array_of_abbr.include?(splitted_string[1])
end

def values_within_range(array)
  result_array = []
  sorted_dates = array.sort

  sorted_dates.each do |date|
    if result_array.empty?
      new_range(date, result_array)
    else
      update_range(date, result_array)
    end
  end

  result_array
end

def update_range(date, result_array)
  last_element = result_array.last
  if last_element.last === (Date.strptime(date, '%Y-%m-%d ') - 1).to_s
    last_element[1] = date
  else
    new_range(date, result_array)
  end
end

def new_range(date, result_array)
  result_array << [date, date]
end

p clean_date(['11 Aug 2020', '29 Jan', '27 Jan', '1 Dec 2022', '28 Jan'])

p clean_date_with_checking(['11 Aug 2020', '29 Jan', 'not a date', '27 Jan', '1 Dec 2022', '28 Jan', 'not a date'])
