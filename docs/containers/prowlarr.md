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
<tr><td><div id="tag2554" onclick="CopyToClipboard('tag2554');return false;" class="tag-decoration">nightly</div><div id="tag17193" onclick="CopyToClipboard('tag17193');return false;" class="tag-decoration">nightly-159d0d0</div><div id="tag22482" onclick="CopyToClipboard('tag22482');return false;" class="tag-decoration">nightly-3.0.2.5775</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/159d0d017fa018201b8e2945098e0d786309e78f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/43632867048" target="_blank">2026-11-14 19:34:50</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24853" onclick="CopyToClipboard('tag24853');return false;" class="tag-decoration">release</div><div id="tag27195" onclick="CopyToClipboard('tag27195');return false;" class="tag-decoration">release-03900a3</div><div id="tag2499" onclick="CopyToClipboard('tag2499');return false;" class="tag-decoration">release-2.7.0.5723</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/03900a3a525cf364fe67dc58aa3d329a380e6e4e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/42324063670" target="_blank">2026-11-07 01:26:15</a></td></tr>
<tr><td><div id="tag10618" onclick="CopyToClipboard('tag10618');return false;" class="tag-decoration">testing</div><div id="tag11154" onclick="CopyToClipboard('tag11154');return false;" class="tag-decoration">testing-ada2305</div><div id="tag11573" onclick="CopyToClipboard('tag11573');return false;" class="tag-decoration">testing-3.0.1.5752</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/ada23057c2f344123621e28cfad3d0acc054d249" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/42501930674" target="_blank">2026-11-08 16:50:30</a></td></tr>
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
