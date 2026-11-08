---
hide:
  - toc
title: hotio/radarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/radarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/radarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/radarr/radarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag25758" onclick="CopyToClipboard('tag25758');return false;" class="tag-decoration">nightly</div><div id="tag10246" onclick="CopyToClipboard('tag10246');return false;" class="tag-decoration">nightly-f6ff2c1</div><div id="tag9261" onclick="CopyToClipboard('tag9261');return false;" class="tag-decoration">nightly-7.0.2.10888</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/f6ff2c155464dfb87ebe8bacdc8683f6f7cf1738" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/42445529725" target="_blank">2026-11-08 04:07:38</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31465" onclick="CopyToClipboard('tag31465');return false;" class="tag-decoration">release</div><div id="tag13156" onclick="CopyToClipboard('tag13156');return false;" class="tag-decoration">release-5e714df</div><div id="tag321" onclick="CopyToClipboard('tag321');return false;" class="tag-decoration">release-6.4.4.10685</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/5e714dff0dcce2ea111f60a2df748a8cebee6d69" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/42324749741" target="_blank">2026-11-07 01:33:57</a></td></tr>
<tr><td><div id="tag7714" onclick="CopyToClipboard('tag7714');return false;" class="tag-decoration">testing</div><div id="tag7170" onclick="CopyToClipboard('tag7170');return false;" class="tag-decoration">testing-fbaba84</div><div id="tag20088" onclick="CopyToClipboard('tag20088');return false;" class="tag-decoration">testing-7.0.2.10888</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/fbaba842d1ea312c383ae9efa940a24dd06381f0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/42505493864" target="_blank">2026-11-08 17:32:44</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="radarr" \
        -p 7878:7878 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="7878/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/radarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      radarr:
        container_name: radarr
        image: ghcr.io/hotio/radarr
        ports:
          - "7878:7878"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=7878/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
