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
<tr><td><div id="tag17556" onclick="CopyToClipboard('tag17556');return false;" class="tag-decoration">nightly</div><div id="tag9256" onclick="CopyToClipboard('tag9256');return false;" class="tag-decoration">nightly-5e28d9c</div><div id="tag13840" onclick="CopyToClipboard('tag13840');return false;" class="tag-decoration">nightly-f481496e5d45e5950b6462405776b18f63358aca</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/5e28d9c39643aa10536a0cc9aa77f50b6422d96c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32126692913" target="_blank">2026-08-18 10:25:33</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1263" onclick="CopyToClipboard('tag1263');return false;" class="tag-decoration">release</div><div id="tag6067" onclick="CopyToClipboard('tag6067');return false;" class="tag-decoration">release-de50765</div><div id="tag3702" onclick="CopyToClipboard('tag3702');return false;" class="tag-decoration">release-5.1.0</div><div id="tag3548" onclick="CopyToClipboard('tag3548');return false;" class="tag-decoration">release-v5</div><div id="tag31218" onclick="CopyToClipboard('tag31218');return false;" class="tag-decoration">release-v5.1</div><div id="tag2190" onclick="CopyToClipboard('tag2190');return false;" class="tag-decoration">release-v5.1.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/de507655f8c676f2c0bfc110f324037a2a99afc7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/31874466766" target="_blank">2026-08-15 08:25:56</a></td></tr>
<tr><td><div id="tag21934" onclick="CopyToClipboard('tag21934');return false;" class="tag-decoration">testing</div><div id="tag24783" onclick="CopyToClipboard('tag24783');return false;" class="tag-decoration">testing-988e600</div><div id="tag30179" onclick="CopyToClipboard('tag30179');return false;" class="tag-decoration">testing-5.1.0</div><div id="tag32425" onclick="CopyToClipboard('tag32425');return false;" class="tag-decoration">testing-v5</div><div id="tag17047" onclick="CopyToClipboard('tag17047');return false;" class="tag-decoration">testing-v5.1</div><div id="tag15650" onclick="CopyToClipboard('tag15650');return false;" class="tag-decoration">testing-v5.1.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/988e600c7c2092950f2ede0e6d23c316dbadd8bb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/31874465855" target="_blank">2026-08-15 08:25:55</a></td></tr>
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
