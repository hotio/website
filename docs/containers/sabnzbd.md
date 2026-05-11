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
<tr><td><div id="tag15323" onclick="CopyToClipboard('tag15323');return false;" class="tag-decoration">nightly</div><div id="tag18813" onclick="CopyToClipboard('tag18813');return false;" class="tag-decoration">nightly-6670b12</div><div id="tag17515" onclick="CopyToClipboard('tag17515');return false;" class="tag-decoration">nightly-90798e5e4dcbd2e45bc0aa36f95de482e08b8cea</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/6670b129a8924a76ff2747babbb24c59c0329e3c" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25701903601" target="_blank">2026-05-11 22:48:49</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1313" onclick="CopyToClipboard('tag1313');return false;" class="tag-decoration">release</div><div id="tag28703" onclick="CopyToClipboard('tag28703');return false;" class="tag-decoration">release-b3bba73</div><div id="tag27514" onclick="CopyToClipboard('tag27514');return false;" class="tag-decoration">release-5.0.1</div><div id="tag8206" onclick="CopyToClipboard('tag8206');return false;" class="tag-decoration">release-v5</div><div id="tag21159" onclick="CopyToClipboard('tag21159');return false;" class="tag-decoration">release-v5.0</div><div id="tag17425" onclick="CopyToClipboard('tag17425');return false;" class="tag-decoration">release-v5.0.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/b3bba732ed865fe8a15db539a6cf05903303ef63" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25701908121" target="_blank">2026-05-11 22:48:56</a></td></tr>
<tr><td><div id="tag16983" onclick="CopyToClipboard('tag16983');return false;" class="tag-decoration">testing</div><div id="tag2292" onclick="CopyToClipboard('tag2292');return false;" class="tag-decoration">testing-651b306</div><div id="tag19296" onclick="CopyToClipboard('tag19296');return false;" class="tag-decoration">testing-5.0.2RC1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/651b3063fdaf2483cccd2865325818410919c19f" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25701913451" target="_blank">2026-05-11 22:49:04</a></td></tr>
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
