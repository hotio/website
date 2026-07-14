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
<tr><td><div id="tag13805" onclick="CopyToClipboard('tag13805');return false;" class="tag-decoration">nightly</div><div id="tag32113" onclick="CopyToClipboard('tag32113');return false;" class="tag-decoration">nightly-8644056</div><div id="tag28317" onclick="CopyToClipboard('tag28317');return false;" class="tag-decoration">nightly-ef2ee17c135c313e12c74455a0472edbae711e79</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/86440560fb962883e4f0c1ea4a429152d3089c9e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/29308628775" target="_blank">2026-07-14 05:28:36</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32394" onclick="CopyToClipboard('tag32394');return false;" class="tag-decoration">release</div><div id="tag10262" onclick="CopyToClipboard('tag10262');return false;" class="tag-decoration">release-1adda6a</div><div id="tag491" onclick="CopyToClipboard('tag491');return false;" class="tag-decoration">release-5.0.4</div><div id="tag5086" onclick="CopyToClipboard('tag5086');return false;" class="tag-decoration">release-v5</div><div id="tag3844" onclick="CopyToClipboard('tag3844');return false;" class="tag-decoration">release-v5.0</div><div id="tag18099" onclick="CopyToClipboard('tag18099');return false;" class="tag-decoration">release-v5.0.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/1adda6ad04a75e50f5674828d61bbdcd4880e231" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/29308628236" target="_blank">2026-07-14 05:28:35</a></td></tr>
<tr><td><div id="tag6584" onclick="CopyToClipboard('tag6584');return false;" class="tag-decoration">testing</div><div id="tag28650" onclick="CopyToClipboard('tag28650');return false;" class="tag-decoration">testing-7075602</div><div id="tag9611" onclick="CopyToClipboard('tag9611');return false;" class="tag-decoration">testing-5.1.0Beta3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/70756023105bfc83799a60696de3a5257d48661f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/29308629189" target="_blank">2026-07-14 05:28:37</a></td></tr>
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
