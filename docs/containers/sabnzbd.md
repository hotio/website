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
<tr><td><div id="tag30315" onclick="CopyToClipboard('tag30315');return false;" class="tag-decoration">nightly</div><div id="tag20401" onclick="CopyToClipboard('tag20401');return false;" class="tag-decoration">nightly-f421a34</div><div id="tag22153" onclick="CopyToClipboard('tag22153');return false;" class="tag-decoration">nightly-7b908680070b9878a675282d74d8b3be089ba7c5</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/f421a346278d4ce485a125c190df19847010fec0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/27946668026" target="_blank">2026-06-22 10:36:09</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28354" onclick="CopyToClipboard('tag28354');return false;" class="tag-decoration">release</div><div id="tag25960" onclick="CopyToClipboard('tag25960');return false;" class="tag-decoration">release-2d0591b</div><div id="tag29105" onclick="CopyToClipboard('tag29105');return false;" class="tag-decoration">release-5.0.4</div><div id="tag4292" onclick="CopyToClipboard('tag4292');return false;" class="tag-decoration">release-v5</div><div id="tag24652" onclick="CopyToClipboard('tag24652');return false;" class="tag-decoration">release-v5.0</div><div id="tag22663" onclick="CopyToClipboard('tag22663');return false;" class="tag-decoration">release-v5.0.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/2d0591b9b579e68938adf1dfe49bd2299c0fd484" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/27915032159" target="_blank">2026-06-21 19:28:13</a></td></tr>
<tr><td><div id="tag31725" onclick="CopyToClipboard('tag31725');return false;" class="tag-decoration">testing</div><div id="tag3676" onclick="CopyToClipboard('tag3676');return false;" class="tag-decoration">testing-02b5e49</div><div id="tag2911" onclick="CopyToClipboard('tag2911');return false;" class="tag-decoration">testing-5.1.0Beta1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/02b5e49232eb672699da628f43d003ed3185466c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/27915032466" target="_blank">2026-06-21 19:28:14</a></td></tr>
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
