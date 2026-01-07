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
<tr><td><div id="tag12616" onclick="CopyToClipboard('tag12616');return false;" class="tag-decoration">nightly</div><div id="tag23798" onclick="CopyToClipboard('tag23798');return false;" class="tag-decoration">nightly-17dcff49b25aaf3988bbc28f46175981908f9211</div><div id="tag15415" onclick="CopyToClipboard('tag15415');return false;" class="tag-decoration">nightly-06d6270</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/06d62706dd7ae22f149b371a11e55181d20d8234" target="_blank">Upstream image update</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/20770107036" target="_blank">2026-01-07 03:57:51</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30379" onclick="CopyToClipboard('tag30379');return false;" class="tag-decoration">release</div><div id="tag18811" onclick="CopyToClipboard('tag18811');return false;" class="tag-decoration">release-4.5.5</div><div id="tag26956" onclick="CopyToClipboard('tag26956');return false;" class="tag-decoration">release-9dd869c</div><div id="tag22308" onclick="CopyToClipboard('tag22308');return false;" class="tag-decoration">release-v4</div><div id="tag2108" onclick="CopyToClipboard('tag2108');return false;" class="tag-decoration">release-v4.5</div><div id="tag6314" onclick="CopyToClipboard('tag6314');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td>Upstream image update</td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/20690836938" target="_blank">2026-01-04 09:26:53</a></td></tr>
<tr><td><div id="tag21406" onclick="CopyToClipboard('tag21406');return false;" class="tag-decoration">testing</div><div id="tag18094" onclick="CopyToClipboard('tag18094');return false;" class="tag-decoration">testing-4.6.0Beta2</div><div id="tag9211" onclick="CopyToClipboard('tag9211');return false;" class="tag-decoration">testing-78037c8</div></td><td>Pre-releases</td><td>Upstream image update</td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/20690837366" target="_blank">2026-01-04 09:26:55</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name sabnzbd \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e WEBUI_PORTS="8080/tcp" \
        -e ARGS="" \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sabnzbd
    ```

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
          - WEBUI_PORTS=8080/tcp
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

--8<-- "includes/wireguard.md"
