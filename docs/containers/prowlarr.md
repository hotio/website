---
hide:
  - toc
title: hotio/prowlarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/prowlarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/prowlarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/prowlarr/prowlarr){ class="header-links" target="_blank" rel="noopener" }  

<div id="tags-table">
  <table>
    <thead>
      <tr>
        <th>Tags <span class="twemoji" title="Click Tag to Copy"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"></path></svg></span></th>
        <th>Description</th>
        <th>Commit</th>
        <th>Last Updated</th>
      </tr>
    </thead>
    <tbody id="tags-table-body">
<tr><td><div id="tag23349" onclick="CopyToClipboard('tag23349');return false;" class="tag-decoration">nightly</div><div id="tag14960" onclick="CopyToClipboard('tag14960');return false;" class="tag-decoration">nightly-3012be3</div><div id="tag4733" onclick="CopyToClipboard('tag4733');return false;" class="tag-decoration">nightly-2.6.4.5611</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/3012be3774ae51c5da0eff76addf88497f926edf" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/34476943275" target="_blank">2026-09-10 12:28:42</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag941" onclick="CopyToClipboard('tag941');return false;" class="tag-decoration">release</div><div id="tag12124" onclick="CopyToClipboard('tag12124');return false;" class="tag-decoration">release-5d503f6</div><div id="tag22741" onclick="CopyToClipboard('tag22741');return false;" class="tag-decoration">release-2.5.2.5491</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/5d503f6faaf77d9c5ab780227dbaadc0871bedb0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/34476947928" target="_blank">2026-09-10 12:28:45</a></td></tr>
<tr><td><div id="tag17538" onclick="CopyToClipboard('tag17538');return false;" class="tag-decoration">testing</div><div id="tag8772" onclick="CopyToClipboard('tag8772');return false;" class="tag-decoration">testing-d3202d5</div><div id="tag30794" onclick="CopyToClipboard('tag30794');return false;" class="tag-decoration">testing-2.6.3.5592</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/d3202d5feac169fc4c3137b016453a4cf62edc12" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/34417952081" target="_blank">2026-09-09 23:40:15</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="prowlarr" \
        -p 9696:9696 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9696/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/prowlarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      prowlarr:
        container_name: prowlarr
        image: ghcr.io/hotio/prowlarr
        ports:
          - "9696:9696"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9696/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
