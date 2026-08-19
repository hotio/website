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
<tr><td><div id="tag26496" onclick="CopyToClipboard('tag26496');return false;" class="tag-decoration">nightly</div><div id="tag14707" onclick="CopyToClipboard('tag14707');return false;" class="tag-decoration">nightly-1f640e6</div><div id="tag3158" onclick="CopyToClipboard('tag3158');return false;" class="tag-decoration">nightly-21d639bf5ff898e05dd48ee08ca76b63e20046a5</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/1f640e6b37396f663addf8bdb2853f5e326188e6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32238102098" target="_blank">2026-08-19 09:32:07</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag0" onclick="CopyToClipboard('tag0');return false;" class="tag-decoration">release</div><div id="tag8226" onclick="CopyToClipboard('tag8226');return false;" class="tag-decoration">release-db48ce1</div><div id="tag10678" onclick="CopyToClipboard('tag10678');return false;" class="tag-decoration">release-5.1.1</div><div id="tag29225" onclick="CopyToClipboard('tag29225');return false;" class="tag-decoration">release-v5</div><div id="tag23506" onclick="CopyToClipboard('tag23506');return false;" class="tag-decoration">release-v5.1</div><div id="tag26978" onclick="CopyToClipboard('tag26978');return false;" class="tag-decoration">release-v5.1.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/db48ce174f247fc6d312f708eba8d9847f0ab073" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32160512150" target="_blank">2026-08-18 16:28:41</a></td></tr>
<tr><td><div id="tag28780" onclick="CopyToClipboard('tag28780');return false;" class="tag-decoration">testing</div><div id="tag31538" onclick="CopyToClipboard('tag31538');return false;" class="tag-decoration">testing-2b89365</div><div id="tag4467" onclick="CopyToClipboard('tag4467');return false;" class="tag-decoration">testing-5.1.1</div><div id="tag21039" onclick="CopyToClipboard('tag21039');return false;" class="tag-decoration">testing-v5</div><div id="tag24335" onclick="CopyToClipboard('tag24335');return false;" class="tag-decoration">testing-v5.1</div><div id="tag6704" onclick="CopyToClipboard('tag6704');return false;" class="tag-decoration">testing-v5.1.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/2b89365d5cdad5f7b32c03b13ccc80e4ceba259d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32160517292" target="_blank">2026-08-18 16:28:45</a></td></tr>
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
