---
hide:
  - toc
title: hotio/nzbhydra2
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/theotherp/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag15825" onclick="CopyToClipboard('tag15825');return false;" class="tag-decoration">release</div><div id="tag252" onclick="CopyToClipboard('tag252');return false;" class="tag-decoration">release-b31a50f</div><div id="tag30884" onclick="CopyToClipboard('tag30884');return false;" class="tag-decoration">release-8.9.0</div><div id="tag15707" onclick="CopyToClipboard('tag15707');return false;" class="tag-decoration">release-v8</div><div id="tag5344" onclick="CopyToClipboard('tag5344');return false;" class="tag-decoration">release-v8.9</div><div id="tag12272" onclick="CopyToClipboard('tag12272');return false;" class="tag-decoration">release-v8.9.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/b31a50f213709e13fe4c1e6bd6bf1b8695c971bd" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/32976817185" target="_blank">2026-08-26 13:52:29</a></td></tr>
<tr><td><div id="tag22050" onclick="CopyToClipboard('tag22050');return false;" class="tag-decoration">testing</div><div id="tag17978" onclick="CopyToClipboard('tag17978');return false;" class="tag-decoration">testing-a152e57</div><div id="tag32488" onclick="CopyToClipboard('tag32488');return false;" class="tag-decoration">testing-8.9.0</div><div id="tag1646" onclick="CopyToClipboard('tag1646');return false;" class="tag-decoration">testing-v8</div><div id="tag21587" onclick="CopyToClipboard('tag21587');return false;" class="tag-decoration">testing-v8.9</div><div id="tag5121" onclick="CopyToClipboard('tag5121');return false;" class="tag-decoration">testing-v8.9.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/a152e57384488b5954c5d1de062540e1f1030562" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/32976823664" target="_blank">2026-08-26 13:52:33</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="nzbhydra2" \
        -p 5076:5076 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5076/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/nzbhydra2
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      nzbhydra2:
        container_name: nzbhydra2
        image: ghcr.io/hotio/nzbhydra2
        ports:
          - "5076:5076"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5076/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
