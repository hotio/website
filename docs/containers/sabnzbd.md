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
<tr><td><div id="tag8443" onclick="CopyToClipboard('tag8443');return false;" class="tag-decoration">nightly</div><div id="tag3222" onclick="CopyToClipboard('tag3222');return false;" class="tag-decoration">nightly-b59276a</div><div id="tag9316" onclick="CopyToClipboard('tag9316');return false;" class="tag-decoration">nightly-19b597d21b777c77093f0cb06adb113fe3ba4439</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/b59276adf14ee30965a07adc7216472a60167fd4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32112207860" target="_blank">2026-08-18 07:35:57</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16199" onclick="CopyToClipboard('tag16199');return false;" class="tag-decoration">release</div><div id="tag12659" onclick="CopyToClipboard('tag12659');return false;" class="tag-decoration">release-de50765</div><div id="tag6068" onclick="CopyToClipboard('tag6068');return false;" class="tag-decoration">release-5.1.0</div><div id="tag12612" onclick="CopyToClipboard('tag12612');return false;" class="tag-decoration">release-v5</div><div id="tag23825" onclick="CopyToClipboard('tag23825');return false;" class="tag-decoration">release-v5.1</div><div id="tag25335" onclick="CopyToClipboard('tag25335');return false;" class="tag-decoration">release-v5.1.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/de507655f8c676f2c0bfc110f324037a2a99afc7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/31874466766" target="_blank">2026-08-15 08:25:56</a></td></tr>
<tr><td><div id="tag17275" onclick="CopyToClipboard('tag17275');return false;" class="tag-decoration">testing</div><div id="tag5566" onclick="CopyToClipboard('tag5566');return false;" class="tag-decoration">testing-988e600</div><div id="tag20745" onclick="CopyToClipboard('tag20745');return false;" class="tag-decoration">testing-5.1.0</div><div id="tag22573" onclick="CopyToClipboard('tag22573');return false;" class="tag-decoration">testing-v5</div><div id="tag8189" onclick="CopyToClipboard('tag8189');return false;" class="tag-decoration">testing-v5.1</div><div id="tag1295" onclick="CopyToClipboard('tag1295');return false;" class="tag-decoration">testing-v5.1.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/988e600c7c2092950f2ede0e6d23c316dbadd8bb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/31874465855" target="_blank">2026-08-15 08:25:55</a></td></tr>
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
