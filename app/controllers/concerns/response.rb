module Response
  def json_response(object, status = 200)
    render json: object, status: status
  end

  def pagination_meta(object) {        
    current_page: object.current_page,        
    next_page: object.next_page,        
    prev_page: object.prev_page,        
    total_pages: object.total_pages,        
    total_count: object.total_count       
   }    
  end
end
