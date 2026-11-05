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
<tr><td><div id="tag5512" onclick="CopyToClipboard('tag5512');return false;" class="tag-decoration">nightly</div><div id="tag4635" onclick="CopyToClipboard('tag4635');return false;" class="tag-decoration">nightly-d35ad32</div><div id="tag12166" onclick="CopyToClipboard('tag12166');return false;" class="tag-decoration">nightly-7df1f19f03c410c6cf70dd860bfcfa211b44b2f7</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/d35ad320ddd190596b99a445a25829b56397e26a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/42094531111" target="_blank">2026-11-05 19:30:25</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18256" onclick="CopyToClipboard('tag18256');return false;" class="tag-decoration">release</div><div id="tag25749" onclick="CopyToClipboard('tag25749');return false;" class="tag-decoration">release-5218623</div><div id="tag7196" onclick="CopyToClipboard('tag7196');return false;" class="tag-decoration">release-5.1.3</div><div id="tag14350" onclick="CopyToClipboard('tag14350');return false;" class="tag-decoration">release-v5</div><div id="tag24465" onclick="CopyToClipboard('tag24465');return false;" class="tag-decoration">release-v5.1</div><div id="tag29415" onclick="CopyToClipboard('tag29415');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/52186231ad908713c2d2ca6f1149f76aa507a2f3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/42094522800" target="_blank">2026-11-05 19:30:22</a></td></tr>
<tr><td><div id="tag28155" onclick="CopyToClipboard('tag28155');return false;" class="tag-decoration">testing</div><div id="tag22152" onclick="CopyToClipboard('tag22152');return false;" class="tag-decoration">testing-ac44927</div><div id="tag13959" onclick="CopyToClipboard('tag13959');return false;" class="tag-decoration">testing-5.2.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/ac44927321076a779fd4b3f197c742eb4ee7b0f2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/42094523645" target="_blank">2026-11-05 19:30:22</a></td></tr>
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
