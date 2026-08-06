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
<tr><td><div id="tag21613" onclick="CopyToClipboard('tag21613');return false;" class="tag-decoration">nightly</div><div id="tag15690" onclick="CopyToClipboard('tag15690');return false;" class="tag-decoration">nightly-08569a6</div><div id="tag15310" onclick="CopyToClipboard('tag15310');return false;" class="tag-decoration">nightly-78cb553b1460d7b3ccb308f976aefd76b1629145</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/08569a6f78b419653facd8a11796855f80d7610a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/31114692727" target="_blank">2026-08-06 15:12:00</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28641" onclick="CopyToClipboard('tag28641');return false;" class="tag-decoration">release</div><div id="tag16881" onclick="CopyToClipboard('tag16881');return false;" class="tag-decoration">release-b5245d7</div><div id="tag13926" onclick="CopyToClipboard('tag13926');return false;" class="tag-decoration">release-5.0.4</div><div id="tag6330" onclick="CopyToClipboard('tag6330');return false;" class="tag-decoration">release-v5</div><div id="tag10956" onclick="CopyToClipboard('tag10956');return false;" class="tag-decoration">release-v5.0</div><div id="tag21500" onclick="CopyToClipboard('tag21500');return false;" class="tag-decoration">release-v5.0.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/b5245d7225070a8fa2cfeb17d67ef0e89bb66136" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/30372822483" target="_blank">2026-07-28 15:19:45</a></td></tr>
<tr><td><div id="tag14296" onclick="CopyToClipboard('tag14296');return false;" class="tag-decoration">testing</div><div id="tag6067" onclick="CopyToClipboard('tag6067');return false;" class="tag-decoration">testing-c07d660</div><div id="tag308" onclick="CopyToClipboard('tag308');return false;" class="tag-decoration">testing-5.1.0RC2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/c07d6604e827abe29ae78cbf3202f43d935ad524" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/30831971032" target="_blank">2026-08-03 16:23:43</a></td></tr>
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
