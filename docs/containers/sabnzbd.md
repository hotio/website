---
hide:
  - toc
title: hotio/sabnzbd
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/sabnzbd/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag20039" onclick="CopyToClipboard('tag20039');return false;" class="tag-decoration">nightly</div><div id="tag21263" onclick="CopyToClipboard('tag21263');return false;" class="tag-decoration">nightly-f0f8b28</div><div id="tag20457" onclick="CopyToClipboard('tag20457');return false;" class="tag-decoration">nightly-cfde583ccc1896ef8aa32bc05961c3cefbdaa5d3</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/f0f8b2821e9c9db96f50572796a6b572d547a17f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/34491625885" target="_blank">2026-09-10 14:49:40</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag333" onclick="CopyToClipboard('tag333');return false;" class="tag-decoration">release</div><div id="tag18519" onclick="CopyToClipboard('tag18519');return false;" class="tag-decoration">release-ba20b35</div><div id="tag9163" onclick="CopyToClipboard('tag9163');return false;" class="tag-decoration">release-5.1.3</div><div id="tag17019" onclick="CopyToClipboard('tag17019');return false;" class="tag-decoration">release-v5</div><div id="tag29057" onclick="CopyToClipboard('tag29057');return false;" class="tag-decoration">release-v5.1</div><div id="tag10764" onclick="CopyToClipboard('tag10764');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/ba20b353cdd97b82838713108ed3c770f53f5f39" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/34423198405" target="_blank">2026-09-10 00:53:24</a></td></tr>
<tr><td><div id="tag17356" onclick="CopyToClipboard('tag17356');return false;" class="tag-decoration">testing</div><div id="tag3798" onclick="CopyToClipboard('tag3798');return false;" class="tag-decoration">testing-a5201e9</div><div id="tag32136" onclick="CopyToClipboard('tag32136');return false;" class="tag-decoration">testing-5.1.3</div><div id="tag13128" onclick="CopyToClipboard('tag13128');return false;" class="tag-decoration">testing-v5</div><div id="tag26735" onclick="CopyToClipboard('tag26735');return false;" class="tag-decoration">testing-v5.1</div><div id="tag27580" onclick="CopyToClipboard('tag27580');return false;" class="tag-decoration">testing-v5.1.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/a5201e938c73c5c7b035a089ce14c723bcceb237" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/34423185997" target="_blank">2026-09-10 00:53:14</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="sabnzbd" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sabnzbd
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      sabnzbd:
        container_name: sabnzbd
        image: ghcr.io/hotio/sabnzbd
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp #(3)!
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
