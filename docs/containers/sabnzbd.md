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
<tr><td><div id="tag30276" onclick="CopyToClipboard('tag30276');return false;" class="tag-decoration">nightly</div><div id="tag1217" onclick="CopyToClipboard('tag1217');return false;" class="tag-decoration">nightly-455a385</div><div id="tag32537" onclick="CopyToClipboard('tag32537');return false;" class="tag-decoration">nightly-adde7b961cdc21bfd43b4221209c895d8c788e8c</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/455a38507b3be03bef0ca8f6dece7014aa925a22" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32131464439" target="_blank">2026-08-18 11:23:14</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27541" onclick="CopyToClipboard('tag27541');return false;" class="tag-decoration">release</div><div id="tag3445" onclick="CopyToClipboard('tag3445');return false;" class="tag-decoration">release-de50765</div><div id="tag2481" onclick="CopyToClipboard('tag2481');return false;" class="tag-decoration">release-5.1.0</div><div id="tag17367" onclick="CopyToClipboard('tag17367');return false;" class="tag-decoration">release-v5</div><div id="tag13783" onclick="CopyToClipboard('tag13783');return false;" class="tag-decoration">release-v5.1</div><div id="tag26101" onclick="CopyToClipboard('tag26101');return false;" class="tag-decoration">release-v5.1.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/de507655f8c676f2c0bfc110f324037a2a99afc7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/31874466766" target="_blank">2026-08-15 08:25:56</a></td></tr>
<tr><td><div id="tag1770" onclick="CopyToClipboard('tag1770');return false;" class="tag-decoration">testing</div><div id="tag11764" onclick="CopyToClipboard('tag11764');return false;" class="tag-decoration">testing-988e600</div><div id="tag15585" onclick="CopyToClipboard('tag15585');return false;" class="tag-decoration">testing-5.1.0</div><div id="tag4181" onclick="CopyToClipboard('tag4181');return false;" class="tag-decoration">testing-v5</div><div id="tag5380" onclick="CopyToClipboard('tag5380');return false;" class="tag-decoration">testing-v5.1</div><div id="tag31603" onclick="CopyToClipboard('tag31603');return false;" class="tag-decoration">testing-v5.1.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/988e600c7c2092950f2ede0e6d23c316dbadd8bb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/31874465855" target="_blank">2026-08-15 08:25:55</a></td></tr>
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
