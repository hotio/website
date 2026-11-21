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
<tr><td><div id="tag31715" onclick="CopyToClipboard('tag31715');return false;" class="tag-decoration">nightly</div><div id="tag28221" onclick="CopyToClipboard('tag28221');return false;" class="tag-decoration">nightly-6f006ea</div><div id="tag26473" onclick="CopyToClipboard('tag26473');return false;" class="tag-decoration">nightly-97ab3370b192058d549a0c54dfb700c1ba1f252e</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/6f006eac8c1492d896125f42b60be4046c31d6da" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/44791682340" target="_blank">2026-11-20 18:19:29</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12218" onclick="CopyToClipboard('tag12218');return false;" class="tag-decoration">release</div><div id="tag24500" onclick="CopyToClipboard('tag24500');return false;" class="tag-decoration">release-c26e572</div><div id="tag20858" onclick="CopyToClipboard('tag20858');return false;" class="tag-decoration">release-5.1.3</div><div id="tag29330" onclick="CopyToClipboard('tag29330');return false;" class="tag-decoration">release-v5</div><div id="tag27834" onclick="CopyToClipboard('tag27834');return false;" class="tag-decoration">release-v5.1</div><div id="tag32612" onclick="CopyToClipboard('tag32612');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/c26e572eafcace73d39d1fefa3403bb2264af6d8" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/44845048776" target="_blank">2026-11-21 00:37:22</a></td></tr>
<tr><td><div id="tag7362" onclick="CopyToClipboard('tag7362');return false;" class="tag-decoration">testing</div><div id="tag8754" onclick="CopyToClipboard('tag8754');return false;" class="tag-decoration">testing-04d5a38</div><div id="tag15953" onclick="CopyToClipboard('tag15953');return false;" class="tag-decoration">testing-5.2.0RC2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/04d5a382d6bb886864b2f91e60b43aeb572ca7bd" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/44845042592" target="_blank">2026-11-21 00:37:19</a></td></tr>
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
