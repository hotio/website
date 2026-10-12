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
<tr><td><div id="tag19526" onclick="CopyToClipboard('tag19526');return false;" class="tag-decoration">nightly</div><div id="tag18724" onclick="CopyToClipboard('tag18724');return false;" class="tag-decoration">nightly-4322320</div><div id="tag19629" onclick="CopyToClipboard('tag19629');return false;" class="tag-decoration">nightly-d050d26c7fcd6e365a05c9cb1d9e375b90c3b1b0</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/432232009d72c5f42aa7a27e18f44bdcc0b479ce" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/38283860973" target="_blank">2026-10-12 17:23:13</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29519" onclick="CopyToClipboard('tag29519');return false;" class="tag-decoration">release</div><div id="tag26722" onclick="CopyToClipboard('tag26722');return false;" class="tag-decoration">release-daef7bb</div><div id="tag11775" onclick="CopyToClipboard('tag11775');return false;" class="tag-decoration">release-5.1.3</div><div id="tag23887" onclick="CopyToClipboard('tag23887');return false;" class="tag-decoration">release-v5</div><div id="tag15999" onclick="CopyToClipboard('tag15999');return false;" class="tag-decoration">release-v5.1</div><div id="tag3753" onclick="CopyToClipboard('tag3753');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/daef7bbd0d0e74c05b7670580bb3052bb0105be2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/37560335109" target="_blank">2026-10-07 02:05:53</a></td></tr>
<tr><td><div id="tag14375" onclick="CopyToClipboard('tag14375');return false;" class="tag-decoration">testing</div><div id="tag25663" onclick="CopyToClipboard('tag25663');return false;" class="tag-decoration">testing-bb6a9e4</div><div id="tag18846" onclick="CopyToClipboard('tag18846');return false;" class="tag-decoration">testing-5.2.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/bb6a9e476f5efe78eb544921eac2f211be81449b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/37560337319" target="_blank">2026-10-07 02:05:55</a></td></tr>
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
