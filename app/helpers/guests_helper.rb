module GuestsHelper
  def boy_count
    Guest.count(:boy)
  end
  
  def girl_count
    Guest.count(:girl)
  end
end