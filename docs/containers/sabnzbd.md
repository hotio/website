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
<tr><td><div id="tag13505" onclick="CopyToClipboard('tag13505');return false;" class="tag-decoration">nightly</div><div id="tag6716" onclick="CopyToClipboard('tag6716');return false;" class="tag-decoration">nightly-4fa32c6</div><div id="tag26030" onclick="CopyToClipboard('tag26030');return false;" class="tag-decoration">nightly-7c089594608c2ab79a83a96b963498ee0337c532</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/4fa32c66c4e40ee07d114e59467e601f05946eb7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/27510789969" target="_blank">2026-06-14 20:16:44</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2451" onclick="CopyToClipboard('tag2451');return false;" class="tag-decoration">release</div><div id="tag21304" onclick="CopyToClipboard('tag21304');return false;" class="tag-decoration">release-a0ab641</div><div id="tag8774" onclick="CopyToClipboard('tag8774');return false;" class="tag-decoration">release-5.0.4</div><div id="tag15662" onclick="CopyToClipboard('tag15662');return false;" class="tag-decoration">release-v5</div><div id="tag18982" onclick="CopyToClipboard('tag18982');return false;" class="tag-decoration">release-v5.0</div><div id="tag28048" onclick="CopyToClipboard('tag28048');return false;" class="tag-decoration">release-v5.0.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/a0ab641838975e084f5308d638d56e590ba97b58" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/27354554271" target="_blank">2026-06-11 14:35:22</a></td></tr>
<tr><td><div id="tag24151" onclick="CopyToClipboard('tag24151');return false;" class="tag-decoration">testing</div><div id="tag1953" onclick="CopyToClipboard('tag1953');return false;" class="tag-decoration">testing-908790b</div><div id="tag26297" onclick="CopyToClipboard('tag26297');return false;" class="tag-decoration">testing-5.1.0Beta1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/908790bd11c54bde5e979501e778e12f3f272b90" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/27498084504" target="_blank">2026-06-14 11:57:10</a></td></tr>
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
