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
<tr><td><div id="tag27365" onclick="CopyToClipboard('tag27365');return false;" class="tag-decoration">nightly</div><div id="tag6415" onclick="CopyToClipboard('tag6415');return false;" class="tag-decoration">nightly-8fcca8b</div><div id="tag22719" onclick="CopyToClipboard('tag22719');return false;" class="tag-decoration">nightly-6.4.2.10574</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/8fcca8b4d04d5f3dd1c4cf2cdfab49368d49d147" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/32045263092" target="_blank">2026-08-17 16:21:46</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12699" onclick="CopyToClipboard('tag12699');return false;" class="tag-decoration">release</div><div id="tag13818" onclick="CopyToClipboard('tag13818');return false;" class="tag-decoration">release-6fbb7bb</div><div id="tag29443" onclick="CopyToClipboard('tag29443');return false;" class="tag-decoration">release-6.3.0.10514</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/6fbb7bbd015a0dce470728b9e5cfdae42eb2db67" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/31874287409" target="_blank">2026-08-15 08:21:37</a></td></tr>
<tr><td><div id="tag31723" onclick="CopyToClipboard('tag31723');return false;" class="tag-decoration">testing</div><div id="tag27570" onclick="CopyToClipboard('tag27570');return false;" class="tag-decoration">testing-e5ebfe7</div><div id="tag30197" onclick="CopyToClipboard('tag30197');return false;" class="tag-decoration">testing-6.4.1.10545</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/e5ebfe785d2c744ea1072e5155cf811620fbe01c" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/32045275666" target="_blank">2026-08-17 16:21:56</a></td></tr>
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
