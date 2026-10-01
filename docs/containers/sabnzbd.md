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
<tr><td><div id="tag11392" onclick="CopyToClipboard('tag11392');return false;" class="tag-decoration">nightly</div><div id="tag16330" onclick="CopyToClipboard('tag16330');return false;" class="tag-decoration">nightly-ed09cc6</div><div id="tag12675" onclick="CopyToClipboard('tag12675');return false;" class="tag-decoration">nightly-2b26ff96f1c77fa5000f2820e59e1b99bd66903c</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/ed09cc6b96436229547c4832253e2f89387cba4a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/36732363993" target="_blank">2026-09-30 14:52:08</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10164" onclick="CopyToClipboard('tag10164');return false;" class="tag-decoration">release</div><div id="tag30626" onclick="CopyToClipboard('tag30626');return false;" class="tag-decoration">release-47c4866</div><div id="tag26175" onclick="CopyToClipboard('tag26175');return false;" class="tag-decoration">release-5.1.3</div><div id="tag15483" onclick="CopyToClipboard('tag15483');return false;" class="tag-decoration">release-v5</div><div id="tag26101" onclick="CopyToClipboard('tag26101');return false;" class="tag-decoration">release-v5.1</div><div id="tag22714" onclick="CopyToClipboard('tag22714');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/47c486615a836acddfb4d206c8ce42627c43899c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/36903970174" target="_blank">2026-10-01 18:03:20</a></td></tr>
<tr><td><div id="tag25774" onclick="CopyToClipboard('tag25774');return false;" class="tag-decoration">testing</div><div id="tag12169" onclick="CopyToClipboard('tag12169');return false;" class="tag-decoration">testing-281bf57</div><div id="tag8912" onclick="CopyToClipboard('tag8912');return false;" class="tag-decoration">testing-5.2.0Beta1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/281bf57678311d97ab09ca4dfd2bea23d7589e72" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/36903963495" target="_blank">2026-10-01 18:03:16</a></td></tr>
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
