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
<tr><td><div id="tag32101" onclick="CopyToClipboard('tag32101');return false;" class="tag-decoration">nightly</div><div id="tag20824" onclick="CopyToClipboard('tag20824');return false;" class="tag-decoration">nightly-4030e6c</div><div id="tag19133" onclick="CopyToClipboard('tag19133');return false;" class="tag-decoration">nightly-59f9a711c758b6073df053eebb0761e9d8750f8e</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/4030e6c605e7d2174158554c7f1f4a80493552f1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/38747138718" target="_blank">2026-10-15 13:57:19</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31075" onclick="CopyToClipboard('tag31075');return false;" class="tag-decoration">release</div><div id="tag29662" onclick="CopyToClipboard('tag29662');return false;" class="tag-decoration">release-daef7bb</div><div id="tag2878" onclick="CopyToClipboard('tag2878');return false;" class="tag-decoration">release-5.1.3</div><div id="tag28257" onclick="CopyToClipboard('tag28257');return false;" class="tag-decoration">release-v5</div><div id="tag22204" onclick="CopyToClipboard('tag22204');return false;" class="tag-decoration">release-v5.1</div><div id="tag18215" onclick="CopyToClipboard('tag18215');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/daef7bbd0d0e74c05b7670580bb3052bb0105be2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/37560335109" target="_blank">2026-10-07 02:05:53</a></td></tr>
<tr><td><div id="tag16620" onclick="CopyToClipboard('tag16620');return false;" class="tag-decoration">testing</div><div id="tag29889" onclick="CopyToClipboard('tag29889');return false;" class="tag-decoration">testing-bb6a9e4</div><div id="tag28892" onclick="CopyToClipboard('tag28892');return false;" class="tag-decoration">testing-5.2.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/bb6a9e476f5efe78eb544921eac2f211be81449b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/37560337319" target="_blank">2026-10-07 02:05:55</a></td></tr>
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
