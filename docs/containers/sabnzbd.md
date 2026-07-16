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
<tr><td><div id="tag19520" onclick="CopyToClipboard('tag19520');return false;" class="tag-decoration">nightly</div><div id="tag17938" onclick="CopyToClipboard('tag17938');return false;" class="tag-decoration">nightly-0db8c60</div><div id="tag13195" onclick="CopyToClipboard('tag13195');return false;" class="tag-decoration">nightly-a1c9a8aab1cd39a8635e23f0e47a04dafed19153</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/0db8c60276793cc5d23a0f2f83fa641ed374da78" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/29534052225" target="_blank">2026-07-16 20:55:45</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3682" onclick="CopyToClipboard('tag3682');return false;" class="tag-decoration">release</div><div id="tag32226" onclick="CopyToClipboard('tag32226');return false;" class="tag-decoration">release-a654991</div><div id="tag1240" onclick="CopyToClipboard('tag1240');return false;" class="tag-decoration">release-5.0.4</div><div id="tag29393" onclick="CopyToClipboard('tag29393');return false;" class="tag-decoration">release-v5</div><div id="tag14844" onclick="CopyToClipboard('tag14844');return false;" class="tag-decoration">release-v5.0</div><div id="tag14526" onclick="CopyToClipboard('tag14526');return false;" class="tag-decoration">release-v5.0.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/a654991219ca33c9c90afb07e02a79ab463d3f09" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/29364644895" target="_blank">2026-07-14 20:09:59</a></td></tr>
<tr><td><div id="tag29431" onclick="CopyToClipboard('tag29431');return false;" class="tag-decoration">testing</div><div id="tag31878" onclick="CopyToClipboard('tag31878');return false;" class="tag-decoration">testing-a9c5fbe</div><div id="tag28775" onclick="CopyToClipboard('tag28775');return false;" class="tag-decoration">testing-5.1.0RC1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/a9c5fbe9449694225530c4eb50b75c6f05176f78" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/29534052347" target="_blank">2026-07-16 20:55:44</a></td></tr>
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
